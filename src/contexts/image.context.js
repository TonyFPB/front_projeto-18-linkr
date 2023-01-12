import { createContext, useContext, useState } from "react";

const UserImageContext = createContext()

export function UserImageProvider({ children }) {
    const [userImage, setUserImage] = useState('')
    return (
        <UserImageContext.Provider value={{ userImage, setUserImage }}>
            {children}
        </UserImageContext.Provider>
    )
}

export const useUserImageProvider = ()=>useContext(UserImageContext)