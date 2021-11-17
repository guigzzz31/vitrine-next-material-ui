import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function TabContext({ children }) {
  const [currentTab, setCurrentTab] = useState("/");

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleClick = (event) => {
    setCurrentTab(event);
  };

  console.log("CONTEXT", currentTab);

  return (
    <AppContext.Provider
      value={{
        currentTab,
        handleChange,
        handleClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useTabs() {
  return useContext(AppContext);
}
