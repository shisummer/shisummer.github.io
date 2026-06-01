import sharp from "sharp"

const input = "public/industry/bae-systems-logo.png"
const img = sharp(input)
const meta = await img.metadata()
console.log("[v0] meta", { width: meta.width, height: meta.height, channels: meta.channels, hasAlpha: meta.hasAlpha })

const { data, info } = await img.raw().toBuffer({ resolveWithObject: true })
const ch = info.channels
const sample = (x, y) => {
  const i = (y * info.width + x) * ch
  return Array.from({ length: ch }, (_, k) => data[i + k])
}
console.log("[v0] corner(2,2)", sample(2, 2))
console.log("[v0] center(512,512)", sample(512, 512))
console.log("[v0] top-mid(512,40)", sample(512, 40))
