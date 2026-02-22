"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
    const pathname = usePathname()

    const links = [
        { href: "/about", label: "ABOUT" },
        { href: "/projects", label: "PROJECTS" },
        { href: "/contact", label: "CONTACT" },
    ]

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between font-mono text-xs md:text-sm">
                <Link href="/" className="font-bold text-accent hover:text-primary transition-colors flex items-center gap-2">
                    <span>{`[`}</span>
                    <span className="tracking-widest">BHARGAVA</span>
                    <span>{`]`}</span>
                </Link>
                <div className="flex items-center gap-4 md:gap-8">
                    <div className="hidden md:flex items-center gap-6 text-muted-foreground">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`hover:text-accent transition-colors ${pathname === link.href ? "text-foreground font-bold border-b border-accent pb-1" : ""
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <a 
                        href="/Bhargava_resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-bold text-accent border border-accent/50 px-3 py-1 text-xs hover:bg-accent hover:text-accent-foreground transition-all shadow-[0_0_8px_rgba(var(--accent),0.2)]"
                    >
                        RESUME
                    </a>
                    <ThemeToggle />
                </div>
            </div>
            {/* Mobile nav links bottom bar could go here, or simple dropdown. For now let's show them on mobile top too, just smaller */}
            <div className="md:hidden flex items-center justify-around pb-2 text-[10px] text-muted-foreground border-t border-border/20 pt-2 background/80">
                <Link href="/" className={pathname === "/" ? "text-accent" : "hover:text-accent"}>HOME</Link>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={pathname === link.href ? "text-accent" : "hover:text-accent"}
                    >
                        {link.label}
                    </Link>
                ))}
                <a href="/Bhargava_resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-bold text-accent drop-shadow-[0_0_5px_rgba(var(--accent),0.5)]">RESUME</a>
            </div>
        </nav>
    )
}
