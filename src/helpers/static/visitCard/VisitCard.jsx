import { makeStyles } from "@mui/styles";

import { Grid, Box } from "@mui/material";


import AvatarGenerator from "../../generators/AvatarGenerator";
import SkillGenerator from "../../generators/SkillGenerator";
import CardName from "./CardName";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.light,
    borderWidth: 1,
    borderRadius: 10,
  },
}));

export default function VisitCard(props) {
  const { name, avatarPath, skills, specialities } = props;
  const classes = useStyles();
  return (
    <Box className={classes.container} boxShadow={3} m={2}>
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
