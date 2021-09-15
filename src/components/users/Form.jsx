import {connect} from "react-redux";
import {updateUser} from "../../store/actions";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {withRouter} from "react-router";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const Form = (props) => {
  const [user, setUser] = useState({});
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  function changeInput(inputName, value) {
    setUser({
      ...user,
      [inputName]: value
    });
  }

  function saveUser() {
    props.updateUser(user);
    history.push("/users");
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h4>EDIT USER</h4>
      {
        Object.keys(user).filter(key => key !== "id" &&
          typeof user[key] === "string").map(key =>
          <TextField
            key={key}
            value={user[key]}
            required
            id={key}
            label={key}
            variant="outlined"
            onChange={(e) => {changeInput(key, e.target.value)}}
          />
        )
      }
      <Button
        variant="contained"
        color="primary"
        size="medium"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={() => {saveUser()}}
      >
        Save
      </Button>
    </form>
  )
}

const mapStateToProps = (state, props) => {
  const user = props.users.find(user => user.id == props.match.params.id);

  return {
    user
  };
}

const mapDispatchToProps = {
  updateUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
