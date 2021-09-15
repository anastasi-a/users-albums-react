import {connect} from "react-redux";
import {useHistory} from "react-router";
import {makeStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles({
  row: {
    cursor: "pointer"
  }
});

const Item = (props) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <TableRow
      className={classes.row}
      onClick={() => history.push("/albums/"+ props.item.id)}
    >
      <TableCell>{props.item.title}</TableCell>
      <TableCell>{props.user.name}</TableCell>
    </TableRow>
  )
}

const mapStateToProps = (state, props) => {
  const user = state.users.users.find(user => user.id === props.item.userId);

  return {
    user
  };
}

export default connect(mapStateToProps)(Item);
