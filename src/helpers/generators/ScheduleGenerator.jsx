import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Subtitle from "../static/article/Subtitle";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  box_01: {
    display: "flex",
    alignItems: "center",
    //carole
    backgroundColor: theme.palette.error.main,
    color: theme.palette.secondary.main,
    minWidth: 52,
    minHeight: 52,
    borderRadius: 8,
  },
  box_02: {
    display: "flex",
    alignItems: "center",
    //carine
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.error.main,
    minWidth: 52,
    minHeight: 52,
    borderRadius: 8,
  },
}));

export default function ScheduleGenerator(props) {
  const classes = useStyles();

  const { schedule } = props;
  return (
    <Grid direction="row" container>
      <Box mt={3}>
        <Box my={3}>
          <Typography>9h</Typography>
        </Box>
        <Box my={3}>
          <Typography>14h</Typography>
        </Box>
        <Box my={3}>
          <Typography>19h</Typography>
        </Box>
      </Box>
      {schedule
        ? schedule.map((item) => {
            let conditionMorning =
              item.morning === "Carole" ? classes.box_01 : classes.box_02;

            let conditionAfternoon =
              item.afternoon === "Carole" ? classes.box_01 : classes.box_02;

            return (
              <Box key={item.column_id} m={0.5}>
                <Subtitle subtitle={item.day} />
                <Grid direction="column" container>
                  <Grid xs item>
                    <Box
                      className={conditionMorning}
                      border={1}
                      borderColor={conditionMorning.color}
                      m={0.5}
                    >
                      <Typography
                        align="center"
                        variant="body1"
                        color={conditionMorning.color}
                      >
                        {item.morning}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs item>
                    <Box
                      className={conditionAfternoon}
                      borderColor={conditionAfternoon.color}
                      border={1}
                      m={0.5}
                    >
                      <Typography
                        align="center"
                        variant="body1"
                        color={conditionAfternoon.color}
                      >
                        {item.afternoon}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            );
          })
        : null}
    </Grid>
  );
}
