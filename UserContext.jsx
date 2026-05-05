import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState({
        name: "Harshit Kaushik",
        role: "BTech CSE AI/ML Student",
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}