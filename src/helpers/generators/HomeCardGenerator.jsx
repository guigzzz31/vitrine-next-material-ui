import { makeStyles } from "@mui/styles";

import { Box, useMediaQuery } from "@mui/material";
import HomeCard from "../static/HomeCard";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "90%",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

export default function HomeCardGenerator(props) {
  const { images } = props;
  const classes = useStyles();
  return (
    <Box
      justifyContent={["center", "space-evenly"]}
      paddingY={[2, 4, 6, 8]}
      className={classes.container}
    >
      {images &&
        images.map((item) => {
          return (
            <HomeCard
              key={item.image_id}
              name={item.name}
              image={item.image}
              path={item.path}
            />
          );
        })}
    </Box>
  );
}
