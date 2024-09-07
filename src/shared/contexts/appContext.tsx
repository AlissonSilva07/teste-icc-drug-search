import { createContext, useContext, useState } from "react";

type AppDataContextProps = {
  isModalOpen: {
    value: boolean;
    setValue: (newValue: boolean) => void;
  };
  openModal: () => void;
  closeModal: () => void;
};

const AppDataContext = createContext<AppDataContextProps>({} as AppDataContextProps);

const AppDataContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const value: AppDataContextProps = {
    isModalOpen: {
      value: isModalOpen,
      setValue: setIsModalOpen
    },
    openModal,
    closeModal,
  };

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};

const useAppDataContext = () => {
  return useContext(AppDataContext);
};

export { AppDataContextProvider, useAppDataContext };
