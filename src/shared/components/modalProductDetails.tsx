import { X } from "lucide-react"
import { Drug } from "../../modules/drugSearch/interfaces/drug"

interface IModalSearch {
    drug: Drug
    onClose: () => void
}

function ModalProductDetails({ drug, onClose }: IModalSearch) {
    return (
        <main className="fixed inset-0 bg-zinc-950/30 flex justify-center z-50">
            <div className="w-2/5 h-fit mt-20 p-6 flex flex-col gap-6 bg-white rounded-xl">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-2xl text-zinc-950 font-semibold">Product Details</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-indigo-100">
                        <X className="text-zinc-950" />
                    </button>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold">{drug.brand_name}</h2>

                    
                </div>
            </div>
        </main>
    )
}

export { ModalProductDetails }