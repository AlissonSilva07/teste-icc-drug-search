import { createContext, useContext, useEffect, useReducer } from "react";
import { Drug } from "../../modules/drugSearch/interfaces/drug";
import { favoritesReducer, State } from "../../modules/drugSearch/hooks/useReducer";

type AppDataContextProps = {
  favoriteDrugs: {
    value: Drug[];
    setValue: (newValue: Drug[]) => void;
  };
  addToFavorites: (newDrug: Drug) => void;
  removeFromFavorites: (drugId: string) => void;
};

const AppDataContext = createContext<AppDataContextProps>({} as AppDataContextProps);

const STORAGE_KEY = "@favorite_drugs"

const AppDataContextProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: State = {
    favorites: JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"),
  };

  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  const addToFavorites = (newDrug: Drug) => {
    dispatch({ type: "ADD_FAVORITE", payload: newDrug });
  };

  const removeFromFavorites = (drugId: string) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: drugId });
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.favorites));
  }, [state.favorites]);

  const value: AppDataContextProps = {
    favoriteDrugs: {
      value: state.favorites,
      setValue: (newFavorites: Drug[]) => {
        newFavorites.forEach(drug => addToFavorites(drug));
      }
    },
    addToFavorites,
    removeFromFavorites
  };

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};

const useAppDataContext = () => {
  return useContext(AppDataContext);
};

export { AppDataContextProvider, useAppDataContext };
