"use client"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="glass-heavy rounded-2xl p-6 md:p-8 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
          placeholder="your name"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
          placeholder="your@email.com"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all resize-none"
          placeholder="your message..."
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-foreground text-background font-medium py-3 rounded-lg hover:bg-foreground/90 transition-colors"
      >
        send message
      </button>
    </form>
  )
}
