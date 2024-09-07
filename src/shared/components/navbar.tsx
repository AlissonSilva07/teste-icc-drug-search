import { Search, User2 } from "lucide-react"
import Logo from '../assets/Logo.png'

function Navbar() {
    return (
        <nav className="w-full h-20 px-16 flex items-center justify-between">
            <div>
                <Search className="text-zinc-950 size-6" />
            </div>
            <img src={Logo} alt="Logo" />
            <div className="flex items-center gap-3">
                <User2 className="text-zinc-950 size-6" />
                <p className="text-zinc-950">User</p>
            </div>
        </nav>
    )
}

export { Navbar }