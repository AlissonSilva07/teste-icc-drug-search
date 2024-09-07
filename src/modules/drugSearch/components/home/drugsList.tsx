import { Drug } from "../../interfaces/drug"
import { DrugItem } from "./drugItem"

interface IDrugsList {
    drugsList: Drug[]
}

function DrugsList({ drugsList }: IDrugsList) {
    return (
        <div className="w-full flex flex-col items-start gap-3">
            {drugsList.length > 0 && drugsList.map(d => (
                <DrugItem key={d.product_id} drug={d} />
            ))}
        </div>
    )
}

export { DrugsList }