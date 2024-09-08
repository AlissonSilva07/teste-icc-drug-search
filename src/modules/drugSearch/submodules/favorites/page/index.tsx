import { Trash } from "lucide-react"
import { useAppDataContext } from "../../../../../shared/contexts/appContext"
import { DrugsList } from "../../../components/drugsList"

function FavoritesPage() {
    const { favoriteDrugs, clearCart } = useAppDataContext()
    return (
        <main className="relative w-full bg-white">
            <section className="h-full px-[480px] flex flex-col items-start gap-6">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-zinc-950 text-[32px] font-semibold">Favorites</h1>
                    <button onClick={clearCart} className={`group ${favoriteDrugs.value.length > 0 ? 'flex' : 'hidden'} items-center gap-2.5 py-1 px-2.5 border-2 border-indigo-800 hover:bg-indigo-800 text-indigo-800 hover:text-white text-sm rounded-full`}>
                        <Trash className="size-3" />
                        Clear Favorites
                    </button>
                </div>
                {favoriteDrugs.value.length > 0 ? <DrugsList drugsList={favoriteDrugs.value} /> : <p className="text-[#ADB5BD]">There are no favorite drugs, try adding some in All Items page.</p>}
            </section>
        </main>
    )
}

export { FavoritesPage }