import { BottomNav } from "./bottomNav"
import { Navbar } from "./navbar"

interface IBaseLayout {
    children: React.ReactNode
}

function BaseLayout({ children }: IBaseLayout) {
    return (
        <main className="w-full h-screen">
            <Navbar />
                {children}
            <BottomNav />
        </main>
    )
}

export { BaseLayout }