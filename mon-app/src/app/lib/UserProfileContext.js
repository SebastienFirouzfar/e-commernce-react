import React, { createContext, useState } from 'react';

export const UserProfileContext = createContext({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
    setUserProfileContext: info => { }
})

const UserProfileContextProvider = ({ children }) => {
    const userProfileState = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        zipCode: "",
        city: "",
        setUserProfileContext: info =>
            //mettre à jour le context
            setUserProfile(prevState => ({
                ...prevState,
                [Object.keys(info)] : Object.values(info)[0]
                // firstName: info.firstName,
                // lastName: info.lastName,
                // email: info.email,
                // zipCode: info.zipCode,
                // city: info.city
            }))
    }
    const [userProfile, setUserProfile] = useState(userProfileState)

    //etat local qu'on va passer dans le provider
    return (<UserProfileContext.Provider value={userProfile}>{children}</UserProfileContext.Provider>)
}

export default UserProfileContextProvider; 