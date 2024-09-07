import { Ingredient } from "../../interfaces/ingredient"

interface IIngredientsGroup {
    ingredients: Ingredient[]
}

function IngredientsGroup({ ingredients }: IIngredientsGroup) {
    return (
        <div className="w-full flex items-center gap-6">
            {ingredients.length > 0 && ingredients.map(i => (
                <div className="py-0.5 px-2.5 bg-zinc-950 flex items-center justify-center rounded-full">
                    <p key={i.name} className="text-white font-semibold text-[10px]">{i.name}</p>
                </div>
            ))}
        </div>
    )
}

export { IngredientsGroup }