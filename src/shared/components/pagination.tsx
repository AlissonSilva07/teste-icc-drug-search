import { ChevronLeft, ChevronRight } from "lucide-react";

interface IPagination {
    actionPrev: () => void
    actionNext: () => void
    disabledPrev: boolean
    disabledNext: boolean
    pageCount: string
}

export function Pagination({ actionPrev, actionNext, disabledPrev, disabledNext, pageCount }: IPagination) {
    return (
        <div className="w-fit flex items-center gap-3">
            <button onClick={actionPrev} disabled={disabledPrev} className="group p-2 bg-indigo-800 hover:bg-indigo-900 disabled:bg-transparent disabled:border disabled:border-zinc-500 rounded-full">
                <ChevronLeft className="size-5 text-white group-disabled:text-zinc-500" />
            </button>
            <p className="w-fit text-sm text-zinc-950">{pageCount}</p>
            <button onClick={actionNext} disabled={disabledNext} className="group p-2 bg-indigo-800 hover:bg-indigo-900 disabled:bg-transparent disabled:border disabled:border-zinc-500 rounded-full">
                <ChevronRight className="size-5 text-white group-disabled:text-zinc-500" />
            </button>
        </div>
    )
}