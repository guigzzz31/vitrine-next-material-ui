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
  },
}));

export default function InfoTipHeader(props) {
  const { head } = props;
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <InfoOutlinedIcon
        sx={{ fontSize: [["16px", "16px", "22px", "24px"]] }}
        className={classes.icon}
      />
      <Typography
        fontSize={["16px", "18px", "18px", "22px", "22px", "24px"]}
        className={classes.head}
      >
        {head}
      </Typography>
    </Box>
  );
}
