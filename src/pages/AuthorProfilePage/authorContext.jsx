import { createContext, useContext, useState } from "react";

export const AuthorContext = createContext(null);

export const useAuthor = () => useContext(AuthorContext);

export const AuthorProvider = ({ children }) => {
 const [authorId, setAuthorId] = useState(null);

 const changeAuthorId = (id) => {
    setAuthorId(id)
 }

 return (
   <AuthorContext.Provider value={{ authorId, changeAuthorId }}>
     {children}
   </AuthorContext.Provider>
 );
};