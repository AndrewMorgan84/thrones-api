import classes from "./House.module.css";
import Card from "../UI/Card";

const House = (props) => {
  const { name, sigil, location } = props;
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
        </header>
        <span>
          <h4>Sigil: {sigil}</h4>
        </span>
        <p>Location: {location}</p>
        <div className={classes.actions}>
          <button>Expand</button>
        </div>
      </Card>
    </li>
  );
};

export default House;
