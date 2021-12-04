import { makeStyles } from "@mui/styles";

import { Box, Typography, Link } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import RoomIcon from "@mui/icons-material/Room";

import CardContainer from "../../containers/CardContainer";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
  },
  icon: {
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    width: ["16px", "18px", "20px", "22px"],
  },
  textInfo: {
    fontSize: ["16px", "16px", "18px", "20px", "22px"],
    fontFamily: "Lato",
  },
  link: {
    fontFamily: "Montserrat",
  },
}));

export default function CardCustom(props) {
  const { name, lines, link } = props.card;
  const classes = useStyles();
  return (
    <CardContainer>
      <Box className={classes.container} paddingY={2} paddingX={1}>
        <Box>
          <Link underline="hover" href={link.url}>
            {name === "Contact" ? (
              <PersonIcon
                className={classes.icon}
                sx={{ fontSize: ["28px", "34px", "38px", "44px", "52px"] }}
              />
            ) : name === "Adresse" ? (
              <HomeIcon
                className={classes.icon}
                sx={{ fontSize: ["28px", "34px", "38px", "44px", "52px"] }}
              />
            ) : (
              <RoomIcon
                className={classes.icon}
                sx={{ fontSize: ["28px", "34px", "38px", "44px", "52px"] }}
              />
            )}
          </Link>
        </Box>
        <Box>
          <Typography
            className={classes.title}
            fontSize={["24px", "24px", "26px", "28px", "28px", "32px"]}
            paddingBottom={name === "Contact" ? 2 : 0}
          >
            {name}
          </Typography>
          <Box pt={1} pb={1}>
            {lines &&
              lines.map((l) => {
                return (
                  <Typography
                    fontFamily="Lato"
                    fontSize={
                      name === "Contact"
                        ? ["18px", "18x", "22px", "24px", "28px", "32px"]
                        : ["16px", "16px", "18px", "20px", "22px"]
                    }
                    fontWeight={name === "Contact" ? 600 : 400}
                    paddingBottom={name === "Contact" ? 1 : 0}
                    marginBottom={name === "Contact" ? 1 : 0}
                  >
                    {l}
                  </Typography>
                );
              })}
          </Box>
          <Link
            underline="hover"
            color="error"
            href={link.url}
            className={classes.link}
            sx={{
              fontSize: ["15px", "16px", "18px", "20px", "22px"],
              fontFamily: "Lato",
            }}
          >
            {link.desc}
          </Link>
        </Box>
      </Box>
    </CardContainer>
  );
}
