"use client"
import * as React from "react"
import { Progress } from "@/components/ui/progress"
export default function CustomProgress() {
    const [progress, setProgress] = React.useState(13)
    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div className="relative w-72">
            <Progress value={progress} className="w-[75%] h-8 rounded-lg" />
            <h2 className="absolute top-[16%] left-[6%] text-white">
                {progress}%
            </h2>
        </div>
    )
}