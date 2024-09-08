function FeaturedDrugSkeleton() {
    return (
        <div className="w-full h-fit flex items-center gap-6 animate-pulse">
            <div className="w-[257px] h-[180px] bg-indigo-100 rounded-xl"></div>
            <div className="flex flex-col items-start gap-2.5">
                <div className="p-1 bg-indigo-100 text-indigo-100 rounded-lg">
                    Latest
                </div>
                <h2 className="p-1 bg-indigo-100 text-indigo-100 rounded-xl">information for skeleton large text</h2>
                <p className="p-w bg-indigo-100 text-indigo-100 rounded-xl">information for skeleton</p>
                <div className="px-6 py-3 bg-indigo-100 text-indigo-100 rounded-full">skeleton</div>
            </div>
        </div>
    )
}

export { FeaturedDrugSkeleton }