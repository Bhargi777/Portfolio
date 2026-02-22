import { Loader2 } from "lucide-react"

export function LoadingScreen() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-transparent relative overflow-hidden pt-16">
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full scale-[2] animate-pulse" style={{ animationDuration: '4s' }} />
            
            {/* New Futuristic Background Elements for Loading */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <div className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border-[1px] border-accent rounded-full animate-[spin_12s_linear_infinite]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                <div className="w-[45vw] h-[45vw] max-w-[450px] max-h-[450px] border-[1px] border-accent/50 rounded-full animate-[spin_18s_linear_infinite_reverse] absolute" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
            </div>

            <div className="font-mono text-sm text-accent animate-in fade-in zoom-in duration-500 relative z-10 flex flex-col items-center gap-8">
                <div className="relative flex items-center justify-center w-24 h-24">
                    <div className="absolute inset-0 border-t-2 border-l-2 border-accent rounded-full animate-spin" style={{ animationDuration: '1.5s' }} />
                    <div className="absolute inset-2 border-b-2 border-r-2 border-primary rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
                    <Loader2 className="w-10 h-10 animate-spin text-accent" style={{ animationDuration: '3s' }} />
                </div>

                <div className="flex flex-col items-center">
                    <pre className="text-center tracking-widest text-xs md:text-sm text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.8)] border border-accent/20 p-6 bg-background/50 backdrop-blur-md rounded-lg">
{`   /\\   
  /  \\  
 /____\\ 
 \\    / 
  \\  /  
   \\/   `}
                    </pre>
                    <div className="mt-8 flex space-x-1.5 font-bold tracking-[0.5em] uppercase text-xs">
                        <span className="animate-bounce" style={{ animationDelay: '0ms' }}>S</span>
                        <span className="animate-bounce" style={{ animationDelay: '100ms' }}>Y</span>
                        <span className="animate-bounce" style={{ animationDelay: '200ms' }}>N</span>
                        <span className="animate-bounce" style={{ animationDelay: '300ms' }}>C</span>
                        <span className="animate-bounce" style={{ animationDelay: '400ms' }}>I</span>
                        <span className="animate-bounce" style={{ animationDelay: '500ms' }}>N</span>
                        <span className="animate-bounce" style={{ animationDelay: '600ms' }}>G</span>
                        <span className="animate-bounce" style={{ animationDelay: '700ms' }}>.</span>
                        <span className="animate-bounce" style={{ animationDelay: '800ms' }}>.</span>
                        <span className="animate-bounce" style={{ animationDelay: '900ms' }}>.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
