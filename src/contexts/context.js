import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function TabContext({ children }) {
  const [currentTab, setCurrentTab] = useState("/");

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  console.log("CONTEXT", currentTab);

  return (
    <AppContext.Provider
      value={{
        currentTab,
        setCurrentTab: handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useTabs() {
  return useContext(AppContext);
}
