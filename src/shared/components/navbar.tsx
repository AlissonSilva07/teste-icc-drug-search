import { Search, User2 } from "lucide-react"
import Logo from '../assets/Logo.png'
import { useState } from "react"
import { ModalSearch } from "./modalSearch"

function Navbar() {
    const [isOpenModalSearch, setIsOpenModalSearch] = useState<boolean>(false)

    return (
        <nav className="relative w-full h-20 px-32 flex items-center justify-between">
            <button onClick={() => setIsOpenModalSearch(true)} className={`relavive p-3 ${isOpenModalSearch ? 'bg-indigo-100 text-indigo-800' : 'bg-white text-black'} hover:bg-indigo-100 rounded-full flex items-center gap-1`}>
                <Search className="size-6" />
            </button>
            <img src={Logo} alt="Logo" />
            <button className="flex p-3 hover:bg-indigo-100 items-center gap-3 rounded-full">
                <User2 className="text-black size-6" />
                <p className="text-black">User</p>
            </button>

            {isOpenModalSearch && <ModalSearch onClose={() => setIsOpenModalSearch(false)} />}
        </nav>
    )
}

export { Navbar }