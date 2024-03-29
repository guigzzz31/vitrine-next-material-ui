import React from "react";

import { makeStyles } from "@mui/styles";
import { Tabs, Tab } from "@mui/material";

import data from "../data/data";

import { useTabs } from "../contexts/context";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: theme.palette.primary.main,
    },
    minHeight: 30,
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    fontSize: 20,
    color: theme.palette.secondary.main,
    textTransform: "none",
  },
  buttonSelected: {
    backgroundColor: theme.palette.secondary.main,
    fontSize: 20,
    color: theme.palette.primary.main,
    textTransform: "none",
    "&.Mui-selected": {
      color: theme.palette.primary.main,
    },
    "&.Mui-focusVisible": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default function MenuDesktop() {
  const { currentTab, handleChange } = useTabs();

  const classes = useStyles();

  return (
    <Tabs value={currentTab} onChange={handleChange} className={classes.root}>
      {data.map((item, i) => {
        return (
          <Tab
            key={item.page_id}
            label={item.pageName}
            value={item.pageName}
            sx={{
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              paddingBottom: "4px",
              paddingTop: "8px",
              minHeight: 30,
              fontWeight: "normal",
            }}
            className={
              currentTab === item.pageName
                ? classes.buttonSelected
                : classes.button
            }
          />
        );
      })}
    </Tabs>
  );
}
