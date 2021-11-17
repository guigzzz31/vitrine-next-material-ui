import React, { useState, useEffect } from "react";

import { makeStyles } from "@mui/styles";
import {
  Button,
  Menu,
  MenuItem,
  Box,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

//import Link from "../helpers/Link";
import Link from "next/link";
import data from "../data/data";
import { getURL } from "next/dist/next-server/lib/utils";

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
  const { currentTab, setCurrentTab } = useTabs();

  const classes = useStyles();

  return (
    <Tabs value={currentTab} onChange={setCurrentTab} className={classes.root}>
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
