export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent text-center">
          <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-xs md:text-sm font-bold">║ Everyone has a reason ║</pre>
          <pre className="text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-muted-foreground text-xs mt-4">
            © {new Date().getFullYear()} • Bhargava Sri Sai 
          </p>
        </div>
      </div>
    </footer>
  )
}
