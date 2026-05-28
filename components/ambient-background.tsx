export function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep royal blue glow - top left */}
      <div 
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-30 blur-[150px] animate-float-slow"
        style={{ backgroundColor: 'oklch(0.35 0.15 265)' }}
      />
      
      {/* Violet glow - right side */}
      <div 
        className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-25 blur-[120px] animate-float-slower"
        style={{ backgroundColor: 'oklch(0.3 0.15 300)' }}
      />
      
      {/* Dark amber/copper glow - bottom */}
      <div 
        className="absolute -bottom-1/4 left-1/3 w-[700px] h-[700px] rounded-full opacity-20 blur-[140px] animate-float-slowest"
        style={{ backgroundColor: 'oklch(0.35 0.12 60)' }}
      />

      {/* Subtle secondary blue - center right */}
      <div 
        className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] animate-float-slower"
        style={{ backgroundColor: 'oklch(0.4 0.18 265)' }}
      />
    </div>
  )
}
