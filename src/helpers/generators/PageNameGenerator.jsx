import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  pageName: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    paddingLeft: 17,
    color: theme.palette.error.main,
  },
}));

export default function PageNameGenerator(props) {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.pageName} variant="h4" gutterBottom>
        {props.pageName}
      </Typography>
    </Box>
  );
}
