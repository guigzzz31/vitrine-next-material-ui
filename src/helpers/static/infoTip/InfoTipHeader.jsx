import { makeStyles, useTheme } from "@mui/styles";

import { Grid, Box, Typography } from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";


const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.info.main,
  },
  head: {
    color: theme.palette.info.main,
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: "1.1rem",
  },
}));

export default function InfoTipHeader(props) {
  const { head } = props;
  const classes = useStyles();
  return (
    <Box p={1}>
      <Grid spacing={1} container>
        <Grid item>
          <InfoOutlinedIcon className={classes.icon} />
        </Grid>
        <Grid item>
          <Typography className={classes.head} >
            {head}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
