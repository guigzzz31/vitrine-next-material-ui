import { makeStyles } from "@mui/styles";

import { Avatar, Box, Button, Typography } from "@mui/material";
import { useTabs } from "../../contexts/context";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    borderWidth: 1,
    borderRadius: 30,
    boxShadow: "20px 20px 60px #d9d7d2, -20px -20px 60px #ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    color: theme.palette.text.primary,
    fontFamily: "Lato",
    fontWeight: 500,
    textTransform: "none",
  },
}));

export default function HomeCard(props) {
  const { name, image, path } = props;
  const { handleClick } = useTabs();
  const classes = useStyles();

  return (
    <Button>
      <Box
        className={classes.container}
        m={2}
        p={2}
        onClick={() => handleClick(path)}
        sx={{ width: [180, 200, 230, 250, 270] }}
      >
        <Avatar
          variant="square"
          src={image}
          sx={{
            width: [130, 150, 180, 200, 220],
            height: [130, 150, 180, 200, 220],
          }}
          alt={name}
        />
        <Typography
          className={classes.text}
          fontSize={["18px", "20px", "24px", "28px", "32px"]}
        >
          {name}
        </Typography>
      </Box>
    </Button>
  );
}
