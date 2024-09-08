import { createContext, useContext, useEffect, useReducer } from "react"
import { Drug } from "../../modules/drugSearch/interfaces/drug"
import { favoritesReducer, State } from "../../modules/drugSearch/hooks/useReducer"
import toast from "react-hot-toast"

type AppDataContextProps = {
  favoriteDrugs: {
    value: Drug[]
    setValue: (newValue: Drug[]) => void
  }
  addToFavorites: (newDrug: Drug) => void
  removeFromFavorites: (drugId: string) => void
  clearCart: () => void
}

const AppDataContext = createContext<AppDataContextProps>({} as AppDataContextProps)

const STORAGE_KEY = "@favorite_drugs"

const AppDataContextProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: State = {
    favorites: JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"),
  }

  const [state, dispatch] = useReducer(favoritesReducer, initialState)

  function addToFavorites(newDrug: Drug) {
    dispatch({ type: "ADD_FAVORITE", payload: newDrug })
    toast.success('The drug was added to favorites.')
  }

  function removeFromFavorites(drugId: string) {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: drugId })
    toast.success('The drug was removed from favorites.')
  }

  function clearCart() {
    dispatch({ type: "CLEAR" })
    toast.success('The favorites were all removed.')
  }

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.favorites))
  }, [state.favorites])

  const value: AppDataContextProps = {
    favoriteDrugs: {
      value: state.favorites,
      setValue: (newFavorites: Drug[]) => {
        newFavorites.forEach(drug => addToFavorites(drug))
      }
    },
    addToFavorites,
    removeFromFavorites,
    clearCart
  }

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
}

const useAppDataContext = () => {
  return useContext(AppDataContext)
}

export { AppDataContextProvider, useAppDataContext }
