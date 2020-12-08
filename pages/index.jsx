import data from "../src/data/data";
import FeedPage from "../src/components/FeedPage";
import VisitCard from "../src/helpers/static/visitCard/VisitCard";
import VisitCardGenerator from "../src/helpers/generators/VisitCardGenerator";

export default function index() {
  const infoPage = data.find(
    (category) => category.pageName === "Présentation"
  );
  let users = [
    {
      user_id: 0,
      name: "Carole Richou",
      avatarPath: "/carole01.png",
      skills: [
        {
          skill_id: 0,
          skill: "Pédicurie, podologie, diabétologie",
        },
        {
          skill_id: 1,
          skill: "Spécialisée en réflexologie",
        },
      ],
    },
    {
      user_id: 1,
      name: "Carine Da Costa",
      avatarPath: "/carine01.png",
      skills: [
        {
          skill_id: 0,
          skill: "Pédicurie, podologie, diabétologie",
        },
        {
          skill_id: 1,
          skill: "Spécialisée en posturologie",
        },
      ],
    },
  ];
  return (
    <>
      <FeedPage infoPage={infoPage} />
      <VisitCardGenerator users={users} />
    </>
  );
}
