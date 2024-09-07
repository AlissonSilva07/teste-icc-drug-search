import { AppDataContextProvider } from "./appContext";

const ContextProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppDataContextProvider>
            {children}
        </AppDataContextProvider>
    );
};

export { ContextProviders };