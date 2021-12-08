import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function TabContext({ children }) {
  const [currentTab, setCurrentTab] = useState("/");

  const handleChange = (event, newValue, name) => {
    setCurrentTab(newValue);
  };

  const handleClick = (event, name) => {
    setCurrentTab(event);
  };

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
