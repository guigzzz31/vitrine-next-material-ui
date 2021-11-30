import { makeStyles, useTheme } from "@mui/styles";

import { Grid, Box, Typography, Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Theme from "../../../../styles/theme";
import CardHeader from "./CardHeader";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.light,
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
  },
  cardLine: {
    fontFamily: "Roboto",
    fontWeight: 500,
  },
  icon: {
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    width: "90%",
  },
  link: {
    fontFamily: "Montserrat",
    fontSize: 15,
  },
}));

export default function CardCoord(props) {
  const { contact } = props;
  const classes = useStyles();
  return (
    <Box
      className={classes.container}
      boxShadow={3}
      m={0.5}
      p={1}
      minWidth={280}
    >
      {/* <CardHeader /> */}

      <Grid justify="space-between" alignItems="center" container>
        <Grid item xs={3}>
          <PersonIcon className={classes.icon} fontSize="large" />
        </Grid>
        <Grid item>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Coordonées
          </Typography>
          <Typography className={classes.cardLine} gutterBottom>
            {contact.num}
          </Typography>
          <Link
            color="error"
            underline="hover"
            href="https://www.doctolib.fr/cabinet-paramedical/cugnaux/cugnaux"
            gutterBottom
            className={classes.link}
          >
            Réservez sur Doctolib
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
