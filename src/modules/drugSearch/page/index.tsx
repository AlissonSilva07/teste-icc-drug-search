import { BottomNav } from "../../../shared/components/bottomNav"
import { Navbar } from "../../../shared/components/navbar"

function HomePage() {
    return (
        <main className="relative w-full bg-white">
            <Navbar />
            <BottomNav />
        </main>
    )
}

export { HomePage }