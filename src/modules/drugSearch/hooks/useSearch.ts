import { useState } from "react";
import { searchDrugsService } from "../services/searchDrugs/searchDrugs.service";
import { Drug } from "../interfaces/drug";

function useSearch() {
    const [searchResults, setSearchResults] = useState<Drug[]>([]);

    async function searchDrugs(query: string) {
        try {
            const response = await searchDrugsService.execute({
                api_key: import.meta.env.VITE_CLIENT_API_KEY,
                limit: 8,
                search: `product_type:"human+otc+drug" AND brand_name:"${query}"`,
                skip: 0
            });
            setSearchResults(response.results);
        } catch (err: unknown) {
            console.error(err);
        }
    }

    return {
        searchResults: {
            value: searchResults,
            set: setSearchResults
        },
        searchDrugs
    };
}

export { useSearch };
