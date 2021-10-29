import { makeStyles } from "@mui/styles";

import { Grid, Box, Typography } from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const useStyles = makeStyles((theme) => ({
  head: {
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
          <InfoOutlinedIcon color="primary" />
        </Grid>
        <Grid item>
          <Typography className={classes.head} color="primary">
            {head}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
