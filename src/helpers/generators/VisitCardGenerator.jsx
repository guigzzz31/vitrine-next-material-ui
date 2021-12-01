import { makeStyles } from "@mui/styles";

import { Box, useMediaQuery } from "@mui/material";
import VisitCard from "../static/visitCard/VisitCard";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
  },
}));

export default function VisitCardGenerator(props) {
  const { users } = props;
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:500px)");

  return (
    <Box
      flexDirection={matches ? "row" : "column"}
      paddingY={4}
      className={classes.container}
    >
      {users &&
        users.map((item) => {
          return (
            <VisitCard
              key={item.user_id}
              name={item.name}
              avatarPath={item.avatarPath}
              skills={item.skills}
              specialities={item.specialities}
            />
          );
        })}
    </Box>
  );
}
