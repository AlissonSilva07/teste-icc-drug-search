import { ChevronRight, PillBottle } from "lucide-react"
import { Button } from "../../../../shared/components/button"
import { Drug } from "../../interfaces/drug"
import { useProductDetails } from "../../hooks/useProductDetails"

interface IFeaturedDrug {
    feturedDrug: Drug
}

function FeaturedDrug({ feturedDrug }: IFeaturedDrug) {
    const { isOpenProductDetails, renderModal } = useProductDetails()

    return (
        <div className="w-full h-fit flex items-center gap-6">
            <div className="w-[257px] h-[180px] bg-orange-600 flex items-center justify-center rounded-xl">
                <PillBottle className="text-white size-12" />
            </div>
            <div className="flex flex-col items-start gap-2.5">
                <div className="p-2 flex items-center justify-center bg-white border border-[#DEE2E6] text-zinc-950 text-xs font-semibold rounded-lg">
                    Latest
                </div>
                <h2 className="text-zinc-950 font-semibold text-2xl line-clamp-1">{feturedDrug.brand_name}</h2>
                <p className="text-[#ADB5BD] line-clamp-1">{feturedDrug.labeler_name}</p>
                <Button onClick={() => isOpenProductDetails.set(true)} variant="primary" size="fit">
                    Details
                    <ChevronRight />
                </Button>
            </div>

            {isOpenProductDetails.value && renderModal(feturedDrug)}
        </div>
    )
}

export { FeaturedDrug }