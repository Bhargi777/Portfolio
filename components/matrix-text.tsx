"use client"

import { useEffect, useState, useRef } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*"

interface MatrixTextProps {
    text: string
    delay?: number
    duration?: number
    className?: string
    triggerOnHover?: boolean
}

export function MatrixText({ text, delay = 0, duration = 1000, className = "", triggerOnHover = false }: MatrixTextProps) {
    const [displayText, setDisplayText] = useState(triggerOnHover ? text : text.replace(/./g, " "))
    const animationRef = useRef<number | null>(null)

    const runMatrixAnimation = () => {
        let startTime: number | null = null

        // Cancel any ongoing animation
        if (animationRef.current) cancelAnimationFrame(animationRef.current)

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime

            if (progress < duration) {
                const revealThreshold = progress / duration
                let newText = ""

                for (let i = 0; i < text.length; i++) {
                    if (text[i] === " " || text[i] === "\n") {
                        newText += text[i]
                        continue
                    }

                    if (Math.random() < revealThreshold) {
                        newText += text[i]
                    } else {
                        newText += CHARS[Math.floor(Math.random() * CHARS.length)]
                    }
                }

                setDisplayText(newText)
                animationRef.current = requestAnimationFrame(animate)
            } else {
                setDisplayText(text)
            }
        }

        animationRef.current = requestAnimationFrame(animate)
    }

    useEffect(() => {
        if (triggerOnHover) return // Don't run on mount if hover trigger enabled

        let timeoutId: NodeJS.Timeout
        timeoutId = setTimeout(() => {
            runMatrixAnimation()
        }, delay)

        return () => {
            clearTimeout(timeoutId)
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
        }
    }, [text, delay, duration, triggerOnHover])

    return (
        <span
            className={className}
            onMouseEnter={triggerOnHover ? runMatrixAnimation : undefined}
        >
            {displayText}
        </span>
    )
}
