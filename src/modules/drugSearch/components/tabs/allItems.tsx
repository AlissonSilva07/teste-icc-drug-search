import { FeaturedDrug } from "../home/featuredDrug"

function AllItemsTab() {
    return (
        <section className="h-full px-[480px] flex flex-col items-start gap-6 py-6">
            <h1 className="text-zinc-950 text-[32px] font-semibold">All Items</h1>
            <FeaturedDrug />
        </section>
    )
}

export { AllItemsTab }