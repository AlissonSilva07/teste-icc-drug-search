import { useEffect, useState } from "react";
import { AllItemsTab } from "./allItems";
import { FavoritesTab } from "./favorites";
import { TabRenderer } from "./tabRenderer";

export type TabType = 'All Items' | 'Favorites'

export type Tab = {
    name: TabType;
    element: JSX.Element;
};

function DrugsTabs() {

    const [tabMode, setTabMode] = useState<TabType>('All Items');
    const [currentTab, setCurrentTab] = useState<Tab | undefined>(undefined);

    const tabs: Tab[] = [
        {
            name: 'All Items',
            element: <AllItemsTab />
        },
        {
            name: 'Favorites',
            element: <FavoritesTab />
        }
    ];

    useEffect(() => {
        setCurrentTab(tabs.find(t => t.name === 'All Items'))
    }, [])

    return (
        <div className="flex-1 bg-white flex flex-col items-start">
            {currentTab && (
                <TabRenderer>
                    {currentTab.element}
                </TabRenderer>
            )}
        </div>
    )
}

export { DrugsTabs };