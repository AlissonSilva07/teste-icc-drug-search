function FeaturedDrugSkeleton() {
    return (
        <div className="w-full h-fit flex items-center gap-6 animate-pulse">
            <div className="w-[257px] h-[180px] bg-[#ADB5BD] rounded-xl"></div>
            <div className="flex flex-col items-start gap-2.5">
                <div className="p-1 bg-[#ADB5BD] text-[#ADB5BD] rounded-lg">
                    Latest
                </div>
                <h2 className="p-1 bg-[#ADB5BD] text-[#ADB5BD]">information for skeleton large text</h2>
                <p className="p-w bg-[#ADB5BD] text-[#ADB5BD]">information for skeleton</p>
                <div className="px-6 py-3 bg-[#ADB5BD] text-[#ADB5BD] rounded-full">skeleton</div>
            </div>
        </div>
    )
}

export { FeaturedDrugSkeleton }