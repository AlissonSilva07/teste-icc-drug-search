import { Heart, LayoutTemplate } from "lucide-react"
import { NavLink } from "react-router-dom"

function BottomNav() {
    return (
        <nav className="fixed bottom-0 h-20 w-full bg-white flex items-center px-[480px] justify-between shadow-[5px_17px_4.5px_17px_rgba(0,0,0,0.25)]">
            <NavLink to='/' className={({ isActive }) =>
                isActive ? "h-full px-6 flex items-center justify-center gap-3 border-t-2 border-indigo-800 text-indigo-800 hover:bg-indigo-100"
                    : "h-full px-6 flex items-center justify-center gap-3 text-[#ADB5BD] hover:bg-indigo-100 hover:text-zinc-950"
            }>
                <LayoutTemplate className="size-6" />
                <p className="font-semibold">All Items</p>
            </NavLink>
            <NavLink to='/favorites' className={({ isActive }) =>
                isActive ? "h-full px-6 flex items-center justify-center gap-3 border-t-2 border-indigo-800 text-indigo-800 hover:bg-indigo-100"
                    : "h-full px-6 flex items-center justify-center gap-3 text-[#ADB5BD] hover:bg-indigo-100 hover:text-zinc-950"
            }>
                <Heart className="size-6" />
                <p className="font-semibold">Favorites</p>
            </NavLink>
        </nav>
    )
}

export { BottomNav }