import { PillBottle, X } from "lucide-react"
import { Drug } from "../../modules/drugSearch/interfaces/drug"
import { Separator } from "./separator"
import dayjs from "dayjs"
import { ActiveIngredientCard } from "../../modules/drugSearch/components/home/activeIngredientCard"

interface IModalSearch {
    drug: Drug
    onClose: () => void
}

function ModalProductDetails({ drug, onClose }: IModalSearch) {
    return (
        <main className="fixed inset-0 bg-zinc-950/30 flex justify-center z-50">
            <div className="w-2/5 h-fit mt-20 p-6 flex flex-col items-start gap-6 bg-white rounded-xl">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-2xl text-zinc-950 font-semibold">Product Details</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-indigo-100">
                        <X className="text-zinc-950" />
                    </button>
                </div>

                <div className="w-full">
                    <div className="w-full h-fit flex items-center gap-6">
                        <div className="w-[257px] h-[128px] bg-orange-600 flex items-center justify-center rounded-xl">
                            <PillBottle className="text-white size-12" />
                        </div>
                        <div className="flex flex-col items-start gap-0.5">
                            <div className="flex flex-col gap-0.5">
                                <p className="text-[10px] text-[#ADB5BD] uppercase">Product Type</p>
                                <p className="font-semibold">{drug.product_type}</p>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <p className="text-[10px] text-[#ADB5BD] uppercase">Brand Name</p>
                                <h2 className="text-zinc-950 font-semibold text-2xl line-clamp-1">{drug.brand_name}</h2>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <p className="text-[10px] text-[#ADB5BD] uppercase">Labeler Name</p>
                                <p className="text-zinc-950 line-clamp-1">{drug.labeler_name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Separator />
                <div className="w-full flex flex-col gap-3">
                    <h3 className="text-xl text-zinc-950 font-semibold">Drug Info</h3>
                    <div className="w-full p-3 flex flex-col gap-3 bg-[#DEE2E6]/30 rounded-xl">
                        <p className="text-zinc-950">Product ID: <span className="font-semibold text-indigo-800">{drug.product_id}</span></p>
                        <p className="text-zinc-950">Marketing Type: <span className="font-semibold text-indigo-800">{drug.marketing_category}</span></p>
                        <p className="text-zinc-950">Dosage Form: <span className="font-semibold text-indigo-800">{drug.dosage_form}</span></p>
                        <p className="text-zinc-950">Expiration Date: <span className="font-semibold text-indigo-800">{dayjs(drug.listing_expiration_date).format('YYYY-MM-DD')}</span></p>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <h3 className="text-xl text-zinc-950 font-semibold">Active ingredients</h3>
                    <div className="w-full flex items-center gap-6 flex-wrap">
                        {drug.active_ingredients.length > 0 ?
                            drug.active_ingredients.map(aI => <ActiveIngredientCard key={aI.name} ingredient={aI} />).slice(0, 6)
                            : <p>No ingredients available.</p>}
                    </div>
                </div>
            </div>
        </main>
    )
}

export { ModalProductDetails }