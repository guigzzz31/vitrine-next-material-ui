import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  pageName: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    paddingLeft: 17,
  },
}));

export default function PageNameGenerator(props) {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        className={classes.pageName}
        color="error"
        variant="h4"
        gutterBottom
      >
        {props.pageName}
      </Typography>
    </Box>
  );
}
