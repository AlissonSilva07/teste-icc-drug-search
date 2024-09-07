import { Dot } from "lucide-react"

function IngredientsGroup() {
    return (
        <div className="w-full flex items-center gap-3">
            <p className="text-[#ADB5BD] text-[10px]">AVOBENZONE</p>
            <Dot className="text-zinc-950" />
            <p className="text-[#ADB5BD] text-[10px]">AVOBENZONE</p>
            <Dot className="text-zinc-950" />
            <p className="text-[#ADB5BD] text-[10px]">AVOBENZONE</p>
        </div>
    )
}

export { IngredientsGroup }