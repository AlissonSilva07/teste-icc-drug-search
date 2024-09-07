import { useState } from "react";
import { listDrugsService } from "../services/listDrugs/listDrugs.service";
import { Drug } from "../interfaces/drug";
import { listFeaturedDrugService } from "../services/listFeaturedDrug/listFeaturedDrug.service";

function useDrugs() {
    const [drugsList, setDrugsList] = useState<Drug[]>([]);
    const [feturedDrug, setFeaturedDrug] = useState<Drug>({} as Drug);
    const [limit, setLimit] = useState<number>(4);
    const [skip, setSkip] = useState<number>(0);

    function getCurrentPage(skip: number, limit: number): number {
        return Math.floor(skip / limit) + 1;
    }

    const handleNextPage = () => {
        setSkip(skip + 4);
    };

    const handlePrevPage = () => {
        setSkip(Math.max(skip - 4, 0));
    };

    async function getDrugs(skip: number) {
        try {
            const result = await listDrugsService.execute({
                api_key: import.meta.env.VITE_CLIENT_API_KEY,
                search: 'product_type:"human+otc+drug"',
                limit: limit,
                skip: skip
            });
            setDrugsList(result.results)
        } catch (err: unknown) {
            console.error(err);
        }
    }

    async function getFeaturedDrug() {
        try {
            const result = await listFeaturedDrugService.execute({
                api_key: import.meta.env.VITE_CLIENT_API_KEY,
                search: 'product_type:"human+otc+drug"',
                limit: 1,
                skip: skip,
                sort: 'marketing_start_date:desc'
            });
            setFeaturedDrug(result.results[0]);
        } catch (err: unknown) {
            console.error(err);
        }
    }

    return {
        drugsList: {
            value: drugsList,
            set: setDrugsList
        },
        feturedDrug: {
            value: feturedDrug,
            set: setFeaturedDrug
        },
        skip: {
            value: skip,
            set: setSkip
        },
        limit: {
            value: limit,
            set: setLimit
        },
        handleNextPage,
        handlePrevPage,
        getCurrentPage,
        getDrugs,
        getFeaturedDrug
    };
}

export { useDrugs };
