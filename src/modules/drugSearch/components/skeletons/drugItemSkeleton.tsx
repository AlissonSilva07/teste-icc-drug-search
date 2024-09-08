function DrugItemSkeleton() {
    return (
        <>
            <div className="group w-full h-fit flex items-center gap-6 pr-3 rounded-xl hover:bg-indigo-100/30 overflow-hidden cursor-pointer">
                <div className="w-[148px] h-[98px] bg-indigo-100 rounded-xl">
                </div>
                <div className="flex-1 flex flex-col items-start gap-2.5">
                    <h2 className="p-2 text-indigo-100 bg-indigo-100 rounded-xl">information for skeleton large text</h2>
                    <p className="p-1 text-indigo-100 bg-indigo-100 rounded-xl">information for skeleton</p>
                </div>
            </div>
        </>
    )
}

export { DrugItemSkeleton }