import { Search, User2 } from "lucide-react"
import Logo from '../assets/Logo.png'
import { useState } from "react"
import { ModalSearch } from "./modalSearch"

function Navbar() {
    const [isOpenModalSearch, setIsOpenModalSearch] = useState<boolean>(false)

    return (
        <nav className="sticky top-0 w-full h-20 px-32 bg-white flex items-center justify-between z-50">
            <button onClick={() => setIsOpenModalSearch(true)} className={`relative p-3 ${isOpenModalSearch ? 'bg-indigo-100 text-indigo-800' : 'bg-white text-black'} hover:bg-indigo-100 hover:text-indigo-800 rounded-full flex items-center gap-1`}>
                <Search className="size-6" />
            </button>
            <img src={Logo} alt="Logo" />
            <button className={`relative p-3 ${isOpenModalSearch ? 'bg-indigo-100 text-indigo-800' : 'bg-white text-black'} hover:bg-indigo-100 hover:text-indigo-800 rounded-full flex items-center gap-3`}>
                <User2 className="size-6" />
                <p>User</p>
            </button>

            {isOpenModalSearch && <ModalSearch onClose={() => setIsOpenModalSearch(false)} />}
        </nav>
    )
}

export { Navbar }