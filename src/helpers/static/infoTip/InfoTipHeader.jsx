import { makeStyles, useTheme } from "@mui/styles";

import { Grid, Box, Typography } from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 8,
    marginBottom: 8,
    alignItems: "center",
  },
  icon: {
    color: theme.palette.primary.main,
    paddingRight: 8,
  },
  head: {
    //width: "80%",
    ///wordBreak: "break-all",
    flex: 1,
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: "1.1rem",
  },
}));

export default function InfoTipHeader(props) {
  const { head } = props;
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <InfoOutlinedIcon className={classes.icon} />
      <Typography className={classes.head}>{head}</Typography>
    </Box>
  );
}
