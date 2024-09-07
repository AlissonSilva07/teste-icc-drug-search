import { LayoutTemplate } from "lucide-react"

function BottomNav() {
    return (
        <nav className="fixed bottom-0 h-20 w-full bg-white flex items-center px-[480px] justify-between shadow-[5px_17px_4.5px_17px_rgba(0,0,0,0.25)]">
            <div className="h-full flex items-center justify-center gap-3 border-t border-indigo-800 text-indigo-800">
                <LayoutTemplate className="size-6" />
                <p>All Items</p>
            </div>
            <div className="h-full flex items-center justify-center gap-3 text-zinc-950">
                <LayoutTemplate className="size-6" />
                <p>All Items</p>
            </div>
        </nav>
    )
}

export { BottomNav }