import { Drug } from "../../interfaces/drug"

type ListFeaturedDrugInputDto = {
    api_key: string
    search: string
    limit: number
    skip: number
    sort: string
}

type ListFeaturedDrugOutputDto = {
    results: Drug[]
}

export type { ListFeaturedDrugInputDto, ListFeaturedDrugOutputDto }