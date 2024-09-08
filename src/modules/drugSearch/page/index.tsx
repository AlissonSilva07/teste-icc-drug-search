import { useEffect } from "react";
import { Pagination } from "../../../shared/components/pagination";
import { Separator } from "../../../shared/components/separator";
import { DrugsList } from "../components/home/drugsList";
import { FeaturedDrug } from "../components/home/featuredDrug";
import { useDrugs } from "../hooks/useDrugs";

function HomePage() {
    const { skip, limit, drugsList, feturedDrug, handleNextPage, handlePrevPage, getCurrentPage, getDrugs, getFeaturedDrug } = useDrugs();

    useEffect(() => {
        getDrugs(skip.value);
        getFeaturedDrug()
    }, [skip.value]);
    return (
        <main className="relative w-full bg-white">
            <section className="h-full px-[480px] flex flex-col items-start gap-6">
                <div className="w-full flex items-center justify-between">
                    <h1 className="text-zinc-950 text-[32px] font-semibold">All Items</h1>
                    <div className="flex items-center gap-3">
                        <Pagination
                            pageCount={`${getCurrentPage(skip.value, limit.value)} out of 10`}
                            actionNext={handleNextPage}
                            disabledNext={skip.value === 36}
                            actionPrev={handlePrevPage}
                            disabledPrev={skip.value === 0}
                        />
                    </div>
                </div>
                <FeaturedDrug feturedDrug={feturedDrug && feturedDrug.value} />
                <Separator />
                <DrugsList drugsList={drugsList && drugsList.value} />
            </section>
        </main>
    )
}

export { HomePage }