import { Drug } from "../../interfaces/drug"

type SearchDrugsInputDto = {
    api_key: string
    search: string
    limit: number
    skip: number
}

type SearchDrugsOutputDto = {
    results: Drug[]
}

export type { SearchDrugsInputDto, SearchDrugsOutputDto }