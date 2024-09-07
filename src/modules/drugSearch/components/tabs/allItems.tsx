import { useEffect } from "react";
import { useDrugs } from "../../hooks/useDrugs";
import { DrugsList } from "../home/drugsList";
import { FeaturedDrug } from "../home/featuredDrug";
import { Pagination } from "../../../../shared/components/pagination";
import { Separator } from "../../../../shared/components/separator";

function AllItemsTab() {
    const { skip, limit, drugsList, getCurrentPage, getDrugs } = useDrugs();

    useEffect(() => {
        getDrugs(skip.value);
    }, [skip.value]);

    const handleNext = () => {
        skip.set(skip.value + 4);
    };

    const handlePrev = () => {
        skip.set(Math.max(skip.value - 4, 0));
    };

    return (
        <section className="h-full px-[480px] flex flex-col items-start gap-6">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-zinc-950 text-[32px] font-semibold">All Items</h1>
                <div className="flex items-center gap-3">
                    <p>Page:</p>
                    <Pagination
                        pageCount={`${getCurrentPage(skip.value, limit.value)} out of 10`}
                        actionNext={handleNext}
                        disabledNext={skip.value === 36}
                        actionPrev={handlePrev}
                        disabledPrev={skip.value === 0}
                    />
                </div>
            </div>
            <FeaturedDrug />
            <Separator />
            <DrugsList drugsList={drugsList.value} />
        </section>
    );
}
export { AllItemsTab }