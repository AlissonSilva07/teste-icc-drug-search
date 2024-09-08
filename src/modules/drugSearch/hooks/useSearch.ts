import { useState } from "react";
import { searchDrugsService } from "../services/searchDrugs/searchDrugs.service";
import { Drug } from "../interfaces/drug";

function useSearch() {
    const [searchResults, setSearchResults] = useState<Drug[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    async function searchDrugs(query: string) {
        setIsLoading(true);
        setError(false); // Reset error state on new search
        try {
            const response = await searchDrugsService.execute({
                api_key: import.meta.env.VITE_CLIENT_API_KEY,
                limit: 8,
                search: `product_type:"human+otc+drug" AND brand_name:"${query}"`,
                skip: 0
            });
            setSearchResults(response.results);
        } catch (err: unknown) {
            setError(true);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        searchResults: {
            value: searchResults,
            set: setSearchResults
        },
        isLoading: {
            value: isLoading,
            set: setIsLoading
        },
        error: {
            value: error,
            setError: setError
        },
        searchDrugs
    };
}

export { useSearch };
