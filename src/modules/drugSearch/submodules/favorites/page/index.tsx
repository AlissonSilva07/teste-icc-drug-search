import { useAppDataContext } from "../../../../../shared/contexts/appContext"
import { DrugsList } from "../../../components/drugsList"

function FavoritesPage() {
    const { favoriteDrugs } = useAppDataContext()
    return (
        <main className="relative w-full bg-white">
            <section className="h-full px-[480px] flex flex-col items-start gap-6">
                <h1 className="text-zinc-950 text-[32px] font-semibold">Favorites</h1>
                <DrugsList drugsList={favoriteDrugs.value} />
            </section>
        </main>
    )
}

export { FavoritesPage }