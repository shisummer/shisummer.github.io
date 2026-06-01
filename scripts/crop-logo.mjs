import sharp from "sharp"

const input = "public/industry/bae-systems-logo.png"
const output = "public/industry/bae-systems-logo-cropped.png"

const img = sharp(input)
const { width, height } = await img.metadata()
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true })
const ch = info.channels

let minX = width,
  minY = height,
  maxX = 0,
  maxY = 0
let found = false

// Detect "red box" pixels (red logo) and white text pixels too -> treat non-black as content
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * ch
    const a = ch === 4 ? data[i + 3] : 255
    // content = visible (opaque) pixel
    const isContent = a > 30
    if (isContent) {
      found = true
      if (x < minX) minX = x
      if (y < minY) minY = y
      if (x > maxX) maxX = x
      if (y > maxY) maxY = y
    }
  }
}

if (!found) {
  console.log("[v0] no content found")
  process.exit(1)
}

const pad = 4
minX = Math.max(0, minX - pad)
minY = Math.max(0, minY - pad)
maxX = Math.min(width - 1, maxX + pad)
maxY = Math.min(height - 1, maxY + pad)

const w = maxX - minX + 1
const h = maxY - minY + 1
console.log("[v0] crop", { minX, minY, w, h })

await sharp(input).extract({ left: minX, top: minY, width: w, height: h }).toFile(output)
console.log("[v0] saved", output)
