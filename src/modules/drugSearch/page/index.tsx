import { BottomNav } from "../../../shared/components/bottomNav"
import { Navbar } from "../../../shared/components/navbar"
import { DrugsTabs } from "../components/tabs/drugsTabs"

function HomePage() {
    return (
        <main className="relative w-full bg-white">
            <Navbar />
            <DrugsTabs />
            <BottomNav />
        </main>
    )
}

export { HomePage }