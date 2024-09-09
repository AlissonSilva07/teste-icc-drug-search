import { Drug } from "../interfaces/drug";

export type State = {
    favorites: Drug[];
};

export type Action =
    | { type: 'ADD_FAVORITE'; payload: Drug }
    | { type: 'REMOVE_FROM_FAVORITES'; payload: string }
    | { type: 'CLEAR' };

export const favoritesReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state,
                favorites: state.favorites.filter(drug => drug.product_id !== action.payload),
            };
        case 'CLEAR':
            return {
                ...state,
                favorites: []
            }
        default:
            return state;
    }
};