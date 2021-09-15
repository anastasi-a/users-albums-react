import {useEffect} from "react";
import {connect} from "react-redux";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import {fetchUsers} from "../store/actions";
import List from "../components/list/List";
import Item from "../components/users/Item";
import Form from "../components/users/Form";

const UsersContainer = (props) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  const match = useRouteMatch();
  const titles = ["Name", "Phone", "Email"];

  return (
    <Switch>
      <Route path={`${match.path}/`} exact>
        <List
          component={Item}
          list={props.users}
          titles={titles}
        />
      </Route>
      <Route path={`${match.path}/:id`}>
        <Form users={props.users} />
      </Route>
    </Switch>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
}

const mapDispatchToProps = {
  fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

