"use client"

interface NavbarProps {
  activeTab: "home" | "projects" | "about" | "contact"
  setActiveTab: (tab: "home" | "projects" | "about" | "contact") => void
}

const navItems = [
  { id: "home", label: "home" },
  { id: "projects", label: "projects" },
  { id: "about", label: "about" },
  { id: "contact", label: "contact" },
] as const

export function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass mx-4 md:mx-8 mt-4 px-6 py-4 rounded-full">
        <ul className="flex items-center justify-center gap-8 md:gap-12">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  activeTab === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
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
