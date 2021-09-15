import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button color="inherit" component={NavLink} to="/" exact>Home</Button>
        <Button color="inherit" component={NavLink} to="/users">Users</Button>
        <Button color="inherit" component={NavLink} to="/albums">Albums</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
