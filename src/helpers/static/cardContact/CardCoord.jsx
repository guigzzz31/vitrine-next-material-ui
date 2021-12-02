import { makeStyles } from "@mui/styles";

import { Grid, Typography, Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CardContainer from "../../containers/CardContainer";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
  },
  cardLine: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: "24px",
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
    <CardContainer>
      <Grid justify="space-between" alignItems="center" container>
        <Grid item xs={3} paddingTop={2}>
          <PersonIcon className={classes.icon} fontSize="large" />
        </Grid>
        <Grid item>
          <Typography className={classes.title} variant="h5">
            Coordonées
          </Typography>
          <Typography className={classes.cardLine} paddingTop={2} gutterBottom>
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
    </CardContainer>
  );
}
