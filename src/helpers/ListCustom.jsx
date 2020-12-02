import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function ListCustom(props) {
  return (
    <List>
      {props.items.map((item) => {
        return (
          <ListItem>
            <ListItemText
              primary={item.primary}
              secondary={item.secondary}
              primaryTypographyProps={{ color: "textPrimary" }}
              secondaryTypographyProps={{ color: "textSecondary" }}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
