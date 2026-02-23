import { useState, useEffect } from "react"

export function LoadingScreen() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100
                }
                // Random increments for a realistic loading feel
                return prev + Math.floor(Math.random() * 15) + 5
            })
        }, 120)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-background relative overflow-hidden">
            {/* Subtle light effect behind */}
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full scale-[1.5]" />
            
            <div className="z-10 flex flex-col items-center w-full max-w-xs px-6">
                <div className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-4 opacity-80 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
                    Connecting
                </div>

                <div className="w-full h-px bg-border flex items-center relative">
                    {/* Glowing progress line */}
                    <div 
                        className="absolute left-0 h-[2px] bg-accent transition-all duration-300 ease-out shadow-[0_0_10px_rgba(var(--accent),0.8)]"
                        style={{ width: \`\${Math.min(progress, 100)}%\` }}
                    />
                </div>

                <div className="w-full flex justify-between mt-3 font-mono text-[10px] text-muted-foreground/60 tracking-wider">
                    <span>SYS.INITIALIZE</span>
                    <span>{Math.min(progress, 100)}%</span>
                </div>
            </div>
        </div>
    )
}
