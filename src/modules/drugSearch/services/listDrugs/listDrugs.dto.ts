import { Drug } from "../../interfaces/drug"

type ListDrugsInputDto = {
    api_key: string
    search: string
    limit: number
    skip: number
}

type ListDrugsOutputDto = {
    results: Drug[]
}

export type { ListDrugsInputDto, ListDrugsOutputDto }