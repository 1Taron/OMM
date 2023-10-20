import { createContext, useContext, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        name: "",
        tel: "",
        email: ""
    });
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
}
