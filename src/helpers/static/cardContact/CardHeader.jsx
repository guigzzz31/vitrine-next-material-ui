import { makeStyles } from "@mui/styles";

import { Grid, Box, Typography, Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const useStyles = makeStyles((theme) => ({
  head: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: "1.5rem",
  },
}));

export default function CardHeader(props) {
  const { head } = props;
  const classes = useStyles();
  return (
    <Box>
      <Grid spacing={1} container>
        <Grid item>
          <PersonIcon fontSize="large" color="primary" />
        </Grid>
        <Grid item>
          <Typography className={classes.head} color="primary">
            Coordonnées
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
