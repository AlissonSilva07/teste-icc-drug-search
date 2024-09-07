import { ChevronRight, PillBottle } from "lucide-react"
import { Button } from "../../../../shared/components/button"

function FeaturedDrug() {
    return (
        <div className="w-full h-fit flex items-center gap-6">
            <div className="w-[257px] h-[180px] bg-orange-600 flex items-center justify-center rounded-xl">
                <PillBottle className="text-white size-12" />
            </div>
            <div className="flex flex-col items-start gap-2.5">
                <div className="p-2 flex items-center justify-center bg-white border border-[#DEE2E6] text-zinc-950 text-xs font-semibold rounded-lg">
                    Featured
                </div>
                <h2 className="text-zinc-950 font-semibold text-2xl">Meijer SPF 30 Sunscreen</h2>
                <p className="text-[#ADB5BD]">Meijer</p>
                <Button variant="primary" size="fit">
                    Details
                    <ChevronRight />
                </Button>
            </div>
        </div>
    )
}

export { FeaturedDrug }