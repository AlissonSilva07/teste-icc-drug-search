import { Ingredient } from "../interfaces/ingredient"

interface IIngredientsGroup {
    ingredients: Ingredient[]
}

function IngredientsGroup({ ingredients }: IIngredientsGroup) {
    return (
        <div className="w-full flex items-center gap-6">
            {ingredients.length > 0 && ingredients.map(i => (
                <div key={i.name} className="py-0.5 px-2.5 bg-zinc-950 flex items-center justify-center rounded-full">
                    <p className="text-white font-semibold text-[10px]">{i.name}</p>
                </div>
            )).slice(0, 4)}
        </div>
    )
}

export { IngredientsGroup }