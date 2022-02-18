import { useSelector } from "react-redux";
import House from "../components/houses/House";
import classes from "./Page.module.css";

const HousesPage = () => {
  const houses = useSelector((state) => state.houses.houses);

  return (
    <section className={classes.page}>
      <h2>Houses</h2>
      <ul>
        {houses.map((house) => (
          <House
            key={house.url}
            id={house.url}
            name={house.name}
            sigil={house.coatOfArms}
            location={house.region}
          />
        ))}
      </ul>
    </section>
  );
};

export default HousesPage;
