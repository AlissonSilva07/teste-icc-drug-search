import { useEffect } from "react"
import { useDrugs } from "../../hooks/useDrugs"
import { DrugsList } from "../home/drugsList"
import { FeaturedDrug } from "../home/featuredDrug"

function AllItemsTab() {
    const { drugsList, getDrugs } = useDrugs()

    useEffect(() => {
        getDrugs()
    }, [])

    return (
        <section className="h-full px-[480px] flex flex-col items-start gap-6">
            <h1 className="text-zinc-950 text-[32px] font-semibold">All Items</h1>
            <FeaturedDrug />
            <DrugsList drugsList={drugsList.value} />
        </section>
    )
}

export { AllItemsTab }