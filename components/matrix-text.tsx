"use client"

import { useEffect, useState } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*"

interface MatrixTextProps {
    text: string
    delay?: number
    duration?: number
    className?: string
}

export function MatrixText({ text, delay = 0, duration = 1000, className = "" }: MatrixTextProps) {
    const [displayText, setDisplayText] = useState(text.replace(/./g, " "))

    useEffect(() => {
        let startTime: number | null = null
        let animationFrameId: number
        let timeoutId: NodeJS.Timeout

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime

            if (progress < duration) {
                // As progress approaches duration, more actual characters are revealed
                const revealThreshold = progress / duration
                let newText = ""

                for (let i = 0; i < text.length; i++) {
                    if (text[i] === " ") {
                        newText += " "
                        continue
                    }

                    // Randomly show original char or a matrix char
                    if (Math.random() < revealThreshold) {
                        newText += text[i]
                    } else {
                        newText += CHARS[Math.floor(Math.random() * CHARS.length)]
                    }
                }

                setDisplayText(newText)
                animationFrameId = requestAnimationFrame(animate)
            } else {
                setDisplayText(text)
            }
        }

        timeoutId = setTimeout(() => {
            animationFrameId = requestAnimationFrame(animate)
        }, delay)

        return () => {
            clearTimeout(timeoutId)
            if (animationFrameId) cancelAnimationFrame(animationFrameId)
        }
    }, [text, delay, duration])

    return <span className={className}>{displayText}</span>
}
