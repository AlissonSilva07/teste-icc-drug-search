import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDrugs } from "../../modules/drugSearch/hooks/useDrugs";

interface IPagination {
    actionPrev: () => void
    actionNext: () => void
    disabledPrev: boolean
    disabledNext: boolean
    pageCount: string
}

export function Pagination({ actionPrev, actionNext, disabledPrev, disabledNext, pageCount }: IPagination) {
    const { limit } = useDrugs()
    return (
        <div className="flex items-center gap-6">
            <p className="text-[#ADB5BD]">Items per page: <span className="font-semibold">{limit.value}</span></p>
            <div className="w-fit flex items-center gap-3">
                <button onClick={actionPrev} disabled={disabledPrev} className="group p-2 bg-indigo-800 hover:bg-indigo-900 disabled:bg-transparent disabled:border disabled:border-[#ADB5BD]/30 rounded-full">
                    <ChevronLeft className="size-5 text-white group-disabled:text-[#ADB5BD]/30" />
                </button>
                <p className="w-fit text-sm text-black">{pageCount}</p>
                <button onClick={actionNext} disabled={disabledNext} className="group p-2 bg-indigo-800 hover:bg-indigo-900 disabled:bg-transparent disabled:border disabled:border-[#ADB5BD]/30 rounded-full">
                    <ChevronRight className="size-5 text-white group-disabled:text-[#ADB5BD]/30" />
                </button>
            </div>
        </div>
    )
}