import { useState } from "react";
import { listDrugsService } from "../services/listDrugs.service";
import { Drug } from "../interfaces/drug";

function useDrugs() {
    const [drugsList, setDrugsList] = useState<Drug[]>([]);
    const [limit, setLimit] = useState<number>(4);
    const [skip, setSkip] = useState<number>(0);

    function getCurrentPage(skip: number, limit: number): number {
        return Math.floor(skip / limit) + 1;
    }

    async function getDrugs(skip: number) {
        try {
            const result = await listDrugsService.execute({
                api_key: import.meta.env.VITE_CLIENT_API_KEY,
                search: 'finished:true',
                limit: limit,
                skip: skip
            });
            setDrugsList(result.results);
        } catch (err: unknown) {
            console.error(err);
        }
    }

    return {
        drugsList: {
            value: drugsList,
            set: setDrugsList
        },
        skip: {
            value: skip,
            set: setSkip
        },
        limit: {
            value: limit,
            set: setLimit
        },
        getCurrentPage,
        getDrugs
    };
}

export { useDrugs };
