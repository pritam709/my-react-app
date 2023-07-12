// import classes from "../components/InputForm.module.css";
import classes from "./ErrorModal.module.css"
import Card from "./Card";
const ErrorModal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <button className={classes.button} onClick={props.onClick}>Okay</button>
      </footer>
    </Card>
  );
};
export default ErrorModal;
