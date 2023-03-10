import React, { createContext, useContext, useState} from "react";
const ViewContext = createContext()
export function useView() {
    return useContext(ViewContext);
  }


export function ViewProvider({ children }) {
    const [showDesign, setShowDesign] = useState(false);
    const [pagePreview, setPagePreview] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const value = {showDesign, setShowDesign,pagePreview, setPagePreview,showProfile, setShowProfile };
  
    return (
      <ViewContext.Provider value={value}>{children}</ViewContext.Provider>
    );
  }