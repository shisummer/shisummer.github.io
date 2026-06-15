"use client"

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "industry", label: "Industry" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return

    const startY = window.scrollY
    const targetY = startY + element.getBoundingClientRect().top
    const distance = targetY - startY
    const duration = 250 // short, snappy duration in ms
    let startTime: number | null = null

    // ease-out so it feels responsive immediately
    const easeOutQuad = (t: number) => t * (2 - t)

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      window.scrollTo(0, startY + distance * easeOutQuad(progress))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass mx-4 md:mx-8 mt-4 px-6 py-4 rounded-full">
        <ul className="flex items-center justify-center gap-8 md:gap-12">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-sm tracking-wide transition-colors duration-300 text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
