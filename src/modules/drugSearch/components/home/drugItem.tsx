import { PillBottle, ChevronRight } from "lucide-react"
import { IngredientsGroup } from "./ingredientsGroup"

function DrugItem() {
    return (
        <div className="w-full h-fit flex items-center gap-6">
            <div className="w-[148px] h-[98px] bg-orange-600 flex items-center justify-center rounded-xl">
                <PillBottle className="text-white size-8" />
            </div>
            <div className="flex-1 flex flex-col items-start gap-3">
                <h2 className="text-zinc-950 font-semibold text-2xl">Meijer SPF 30 Sunscreen</h2>
                <p className="text-[#ADB5BD]">Meijer</p>
                <IngredientsGroup />
            </div>
            <ChevronRight className="text-zinc-950 size-6" />
        </div>
    )
}

export { DrugItem }