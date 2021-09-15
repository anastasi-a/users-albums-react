import {connect} from "react-redux";
import {useHistory} from "react-router";
import {makeStyles} from '@material-ui/core/styles';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {removeUser} from "../../store/actions";
const useStyles = makeStyles({
  row: {
    cursor: "pointer"
  }
});

const Item = (props) => {
  const history = useHistory();
  const classes = useStyles();

  function editUser(e) {
    e.stopPropagation();
    props.removeUser(props.item.id)
  }

  return (
    <TableRow
      className={classes.row}
      onClick={() => history.push("/users/"+ props.item.id)}
    >
      <TableCell>{props.item.name}</TableCell>
      <TableCell>{props.item.phone}</TableCell>
      <TableCell>{props.item.email}</TableCell>
      <TableCell>
        <IconButton
          aria-label="delete"
          onClick={editUser}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

const mapDispatchToProps = {
  removeUser
}

export default connect(null, mapDispatchToProps)(Item);
