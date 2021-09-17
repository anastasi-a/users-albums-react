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
  const [error, setError] = useState({});

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
    setError({});
  }

  function validateForm() {
    let errors = {};
    let isValid = true;

    if (!user.name.trim()) {
      isValid = false;
      errors["name"] = "Name field cannot be empty";
    } else {
      if (!user.name.match(/^[a-zA-Z- ]+$/)) {
        isValid = false;
        errors["name"] = "Please enter only letters";
      }
    }

    if (!user.username.trim()) {
      isValid = false;
      errors["username"] = "Username field cannot be empty";
    }

    if (!user.email.trim()) {
      isValid = false;
      errors["email"] = "Email field cannot be empty";
    } else {
      let lastAtPos = user.email.lastIndexOf('@');
      let lastDotPos = user.email.lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 &&
        user.email.indexOf('@@') === -1 &&
        lastDotPos > 2 && (user.email.length - lastDotPos) > 2)) {
        isValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    if (!user.phone.trim()) {
      isValid = false;
      errors["phone"] = "Phone field cannot be empty";
    }

    const websitePattern = (/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/);
    if (!user.website.trim()) {
      isValid = false;
      errors["website"] = "Website field cannot be empty";
    } else if (!user.website.match(websitePattern)) {
      isValid = false;
      errors["website"] = "Website is not valid";
    }

    setError(errors);
    return isValid;
  }

  function saveUser() {
    if (validateForm()) {
      props.updateUser(user);
      history.push("/users");
    }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h4>EDIT USER</h4>
      { user &&
        Object.keys(user).filter(key => key !== "id" &&
          typeof user[key] === "string").map(key =>
          <TextField
            error={!!error[key]}
            key={key}
            value={user[key]}
            required
            id={key}
            label={key}
            helperText={error[key]}
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
