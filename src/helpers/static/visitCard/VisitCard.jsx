import { makeStyles } from "@mui/styles";

import { Grid, Box } from "@mui/material";

import AvatarGenerator from "../../generators/AvatarGenerator";
import SkillGenerator from "../../generators/SkillGenerator";
import CardName from "./CardName";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    borderWidth: 1,
    borderRadius: 30,
    boxShadow: "20px 20px 60px #d9d7d2, -20px -20px 60px #ffffff",
    //maxWidth: "320px",
  },
}));

export default function VisitCard(props) {
  const { name, avatarPath, skills, specialities } = props;
  const classes = useStyles();
  return (
    <Box className={classes.container} m={2} p={2}>
      <Grid
        justify="center"
        alignItems="center"
        direction="column"
        spacing={1}
        container
      >
        <Grid item>
          <AvatarGenerator avatarPath={avatarPath} />
        </Grid>
        <Grid item>
          <Box zIndex={3} p={1}>
            <CardName title={name} />
            <SkillGenerator skills={skills} specialities={specialities} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
