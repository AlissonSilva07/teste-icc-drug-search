import { PillBottle, ChevronRight } from "lucide-react"
import { Drug } from "../interfaces/drug"
import { useProductDetails } from "../hooks/useProductDetails"
import { IngredientsGroup } from "./ingredientsGroup"

interface IDrugItem {
    drug: Drug
}

function DrugItem({ drug }: IDrugItem) {
    const { isOpenProductDetails, renderModal } = useProductDetails()
    return (
        <>
            <div onClick={() => isOpenProductDetails.set(true)} className="group w-full h-fit flex items-center gap-6 pr-3 rounded-xl hover:bg-indigo-100/30 overflow-hidden cursor-pointer">
                <div className="w-[148px] h-[98px] bg-orange-600 flex items-center justify-center rounded-xl">
                    <PillBottle className="text-white size-8" />
                </div>
                <div className="flex-1 flex flex-col items-start gap-2.5">
                    <h2 className="text-black font-semibold text-2xl line-clamp-1">{drug.brand_name}</h2>
                    <p className="text-[#ADB5BD] line-clamp-1">{drug.labeler_name}</p>
                    {drug.active_ingredients ? <IngredientsGroup ingredients={drug.active_ingredients} /> : <p className="text-indigo-800 uppercase text-[10px] font-semibold">No ingredients available</p>}
                </div>
                <ChevronRight className="hidden group-hover:block text-black size-6" />
            </div>

            {isOpenProductDetails.value === true && renderModal(drug)}
        </>
    )
}

export { DrugItem }