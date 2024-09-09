import { Info, Trash } from "lucide-react"
import { useAppDataContext } from "../../../../../shared/contexts/appContext"
import { DrugsList } from "../../../components/drugsList"
import { Link } from "react-router-dom"

function FavoritesPage() {
    const { favoriteDrugs, clearCart } = useAppDataContext()
    return (
        <main className="relative w-full bg-white">
            <section className="h-full px-[280px] 2xl:px-[480px] flex flex-col items-start gap-6">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-black text-[32px] font-semibold">Favorites</h1>
                    <button onClick={clearCart} className={`group ${favoriteDrugs.value.length > 0 ? 'flex' : 'hidden'} items-center gap-2.5 py-1 px-2.5 border-2 border-indigo-800 hover:bg-indigo-800 text-indigo-800 hover:text-white text-sm rounded-full`}>
                        <Trash className="size-3" />
                        Clear Favorites
                    </button>
                </div>
                {favoriteDrugs.value.length > 0 ? <DrugsList drugsList={favoriteDrugs.value} /> : (
                    <div className="w-full flex items-center gap-3">
                        <Info className="text-[#ADB5BD] size-4" />
                        <p className="text-[#ADB5BD]">There are no favorite drugs yet, try adding some in <Link to="/" className="font-semibold underline decoration-solid">All Items page</Link>.</p>
                    </div>
                )}
            </section>
        </main>
    )
}

export { FavoritesPage }