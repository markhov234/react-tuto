import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  // Définis la function on Click ici
  return (
    <header className="header">
      <h1>{props.title}</h1>
      {/* Envoie la function onClick a l'enfant */}
      <Button
        color={props.showAdd ? "red" : "green"}
        text={props.showAdd ? "Close" : "Add"}
        onClick={props.onAdd}
      />
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

// Peut créer css dans la page même, s'insérerais dans le h1 style={headingStyles} et cet élément aurait les classes mentionnées si bas
// const headingStyles = {
//     color:'red',
//     backgroundColor: 'black',

// }

export default Header;

// Props doit être mentionné pour pouvoir choisir l'objet qu'il est a l'intérieur un peu comme vue !
// Même chose que vuejs pour ce qui est des types.
