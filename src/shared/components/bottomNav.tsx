import { Heart, LayoutTemplate } from "lucide-react"

function BottomNav() {
    return (
        <nav className="fixed bottom-0 h-20 w-full bg-white flex items-center px-[480px] justify-between shadow-[5px_17px_4.5px_17px_rgba(0,0,0,0.25)]">
            <button className="h-full px-6 flex items-center justify-center gap-3 border-t border-indigo-800 text-indigo-800 hover:bg-indigo-100">
                <LayoutTemplate className="size-6" />
                <p className="font-semibold">All Items</p>
            </button>
            <button className="h-full px-6 flex items-center justify-center gap-3 text-zinc-950 hover:bg-indigo-100">
                <Heart className="size-6" />
                <p className="font-semibold">Favorites</p>
            </button>
        </nav>
    )
}

export { BottomNav }