import { DrugItem } from "./drugItem"

function DrugsList() {
    return (
        <div className="w-full flex flex-col items-start gap-3">
            <DrugItem />
            <DrugItem />
            <DrugItem />
            <DrugItem />
        </div>
    )
}

export { DrugsList }