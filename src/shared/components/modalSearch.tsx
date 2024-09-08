import { Delete, Info, Search, X } from "lucide-react"
import { useEffect, useState } from "react"
import { useSearch } from "../../modules/drugSearch/hooks/useSearch"
import { DrugItemSearch } from "../../modules/drugSearch/components/drugItemSearch"
import { Loader } from "./loader"

interface IModalSearch {
    onClose: () => void
}

function ModalSearch({ onClose }: IModalSearch) {
    const [query, setQuery] = useState<string>("")
    const { searchResults, isLoading, error, searchDrugs } = useSearch()

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (query) {
                searchDrugs(query);
            }
        }, 750);
        return () => clearTimeout(debounce);
    }, [query]);

    return (
        <main className="fixed inset-0 bg-zinc-950/30 flex justify-center z-50">
            <div className="w-2/5 h-fit mt-20 p-6 flex flex-col gap-6 bg-white rounded-xl">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-2xl text-black font-semibold">Search</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-indigo-100">
                        <X className="text-black" />
                    </button>
                </div>

                <div className="relative w-full flex items-center">
                    <input
                        type="text"
                        className="w-full p-3 border border-[#DEE2E6] rounded-xl outline-orange-600"
                        placeholder="Type to automatically search for an item. E.g: Aspirin"
                        value={query}
                        onChange={e => setQuery(e.target.value)} />
                    {query.length > 0 ? (
                        <button onClick={() => setQuery("")} className="flex items-center justify-center text-[#DEE2E6] hover:text-indigo-800">
                            <Delete className="absolute right-6 size-5" />
                        </button>
                    ) : (
                        <Search className="absolute right-6 size-5 text-[#DEE2E6]" />
                    )}
                </div>

                {isLoading.value ? (
                    <Loader />
                ) : query.length > 0 ? (
                    error.value ? (
                        <p className="text-red-500">No matches found. Try a diferent query.</p>
                    ) : searchResults.value.length > 0 && (
                        <>
                            <h3 className="text-xl font-semibold">Search results for: "{query}"</h3>
                            {searchResults.value.map(sR => (
                                <div key={sR.product_id} className="w-full flex flex-col gap-3">
                                    <DrugItemSearch drugSearch={sR} />
                                </div>
                            ))}
                        </>
                    )
                ) : query === "" ? (
                    <div className="w-full flex items-center gap-3">
                        <Info className="text-[#ADB5BD] size-4" />
                        <p className="text-[#ADB5BD]">Use the search field to query for drugs.</p>
                    </div>
                ) : null}
            </div>
        </main>
    )
}

export { ModalSearch }