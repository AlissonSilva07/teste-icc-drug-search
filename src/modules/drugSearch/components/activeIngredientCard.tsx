import { Ingredient } from "../interfaces/ingredient"

interface IActiveIngredientCard {
    ingredient: Ingredient
}

function ActiveIngredientCard({ ingredient }: IActiveIngredientCard) {
    return (
        <div className="w-fit p-3 flex flex-col gap-3 bg-[#DEE2E6]/30 rounded-xl">
            <p className="text-xs text-[#ADB5BD]">{ingredient.name}</p>
            <h3 className="text-2xl text-indigo-800 font-semibold">{ingredient.strength}</h3>
        </div>
    )
}

export { ActiveIngredientCard }