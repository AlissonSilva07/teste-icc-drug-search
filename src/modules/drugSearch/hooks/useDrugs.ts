import { useState } from "react"
import { listDrugsService } from "../services/listDrugs.service"
import { Drug } from "../interfaces/drug"

function useDrugs() {
    const [drugsList, setDrugsList] = useState<Drug[]>([])
    
    async function getDrugs() {
        try {
            const result = await listDrugsService.execute({
                api_key: import.meta.env.VITE_CLIENT_API_KEY,
                search: 'finished:true',
                limit: 4,
                skip: 1
            })
            setDrugsList(result.results)            
        } catch (err: unknown) {
            console.error(err)
        }
    }

    return {
        drugsList: {
            value: drugsList,
            set: setDrugsList
        },
        getDrugs
    }
}

export { useDrugs }