import Card from "../UI/Card";
import classes from "./Users.module.css"
const Users = (props) => {
  return (
    <Card className={classes.users}>
    <ul >
      {props.items.map((item) => (
        
        <li key={item.id}>
       
          {item.name} {item.age}(years old)
        </li>
      ))}
    </ul>
    </Card>
  );
};
export default Users;
