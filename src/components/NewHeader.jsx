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
      backgroundColor: theme.palette.error.main,
      width: "80%",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: 40,
      width: "80%",
      backgroundColor: "transparent",
    },
    minHeight: 30,
  },
  button: {
    backgroundColor: "transparent",
    fontSize: 20,
    color: theme.palette.text.primary,
    textTransform: "none",
  },
  buttonSelected: {
    backgroundColor: "transparent",
    fontSize: 20,
    color: theme.palette.primary.main,
    textTransform: "none",
    "&.Mui-selected": {
      color: theme.palette.text.primary,
      fontFamily: "Montserrat",
      fontWeight: 600,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "transparent",
    },
  },
}));

export default function NewHeader() {
  const { currentTab, handleChange } = useTabs();

  const classes = useStyles();

  return (
    <Tabs value={currentTab} onChange={handleChange} className={classes.root}>
      {data.map((item, i) => {
        return (
          <Tab
            key={item.page_id}
            label={item.pageName}
            value={item.path}
            sx={{
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              paddingBottom: "4px",
              paddingTop: "8px",
              minHeight: 30,
              fontWeight: "normal",
            }}
            className={
              currentTab === item.path ? classes.buttonSelected : classes.button
            }
          />
        );
      })}
    </Tabs>
  );
}
