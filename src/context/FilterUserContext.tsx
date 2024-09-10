import React, { ReactNode, createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContext"; 

export interface FilterUser {
    name: string;
    email: string;
    city: string;
    gender: string;
    rangeAge: {
        idadeMax: number | null | undefined;
        idadeMin: number | null | undefined;
    };
    Ilike: boolean;
    userId: string | number;
    applyFilter: boolean;
}

export interface FilterUserContextType {
    filters: FilterUser;
    setFilters: (filters: FilterUser) => void;
}

export const FilterUserContext = createContext<FilterUserContextType | undefined>(undefined);

export const FilterUserProvider = ({ children }: { children: ReactNode }) => {
    const { user } = useContext(AuthContext)!; // Obtém o usuário do contexto de autenticação

    const [filters, setFilters] = useState<FilterUser>({
        name: "",
        email: "",
        city: "",
        gender: "",
        rangeAge: { idadeMax: 100, idadeMin: 0 },
        Ilike: false,
        userId: user?.id || 0 ,
        applyFilter: false
    });

    return (
        <FilterUserContext.Provider value={{ filters, setFilters }}>
            {children}
        </FilterUserContext.Provider>
    );
};
