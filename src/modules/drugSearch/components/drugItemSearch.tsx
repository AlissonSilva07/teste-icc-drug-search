import { PillBottle, ChevronRight } from "lucide-react"
import { Drug } from "../interfaces/drug"
import { useProductDetails } from "../hooks/useProductDetails"

interface IDrugItemSearch {
    drugSearch: Drug
}

function DrugItemSearch({ drugSearch }: IDrugItemSearch) {
    const { isOpenProductDetails, renderModal } = useProductDetails()
    return (
        <>
            <div onClick={() => isOpenProductDetails.set(true)} className="group w-full h-fit flex items-center gap-3 pr-3 rounded-xl hover:bg-indigo-100/30 overflow-hidden cursor-pointer">
                <div className="w-[42px] h-[42px] bg-orange-600 flex items-center justify-center rounded-xl">
                    <PillBottle className="text-white size-5" />
                </div>
                <div className="flex-1 flex flex-col items-start gap-0.5">
                    <h2 className="text-zinc-950 font-semibold line-clamp-1">{drugSearch.brand_name}</h2>
                    <p className="text-[#ADB5BD] text-xs line-clamp-1">{drugSearch.labeler_name}</p>
                </div>
                <ChevronRight className="hidden group-hover:block text-zinc-950 size-6" />
            </div>

            {isOpenProductDetails.value === true && renderModal(drugSearch)}
        </>
    )
}

export { DrugItemSearch }