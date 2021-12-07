import { makeStyles } from "@mui/styles";

import { Box, useMediaQuery } from "@mui/material";
import VisitCard from "../static/visitCard/VisitCard";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    //alignItems: "center",
    //flexWrap: "wrap",
  },
}));

export default function VisitCardGenerator(props) {
  const { users } = props;
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:500px)");
  const matches600 = useMediaQuery("max-width:600px");
  console.log("matches600", matches600);
  return (
    <Box
      flexWrap="wrap"
      //justifyContent={matches ? "space-evenly" : "center"}
      justifyContent={["center", "space-evenly"]}
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
