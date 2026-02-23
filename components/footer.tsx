export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 mt-0 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent text-center">
          <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-[10px] md:text-xs font-bold font-sans tracking-widest pt-1 pb-1">ARCHITECTING THE FUTURE, ONE LINE AT A TIME</pre>
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
