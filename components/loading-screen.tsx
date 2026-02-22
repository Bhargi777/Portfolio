import { Loader2 } from "lucide-react"

export function LoadingScreen() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-transparent relative overflow-hidden pt-16">
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full scale-150 animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="font-mono text-sm text-accent animate-in fade-in zoom-in duration-500 relative z-10 flex flex-col items-center gap-6">
                <Loader2 className="w-10 h-10 animate-spin" />
                <pre className="text-center tracking-widest text-xs md:text-sm shadow-lg shadow-accent/20 border border-accent/20 p-6 bg-background/50 backdrop-blur-md">
                    {`╔════════════════════════╗
║ INITIALIZING SYSTEM... ║
╚════════════════════════╝`}
                </pre>
                <div className="h-1 w-48 bg-border overflow-hidden rounded-full">
                    <div className="h-full bg-accent w-1/2" style={{ animationName: 'progress', animationDuration: '2s' }} />
                </div>
            </div>
        </div>
    )
}
