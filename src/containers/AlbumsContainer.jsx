import {useEffect} from "react";
import {connect} from "react-redux";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import {fetchAlbums, fetchUsers} from "../store/actions";
import List from "../components/list/List";
import Item from "../components/albums/Item";
import Photos from "../components/albums/Photos";

const AlbumsContainer = (props) => {
  useEffect(() => {
    props.fetchUsers();
    props.fetchAlbums();
  }, []);

  const match = useRouteMatch();
  const titles = ["Title", "Owner"];

  return (
    <Switch>
      <Route path={`${match.path}/`} exact>
        <List
          component={Item}
          list={props.albums}
          titles={titles}
        />
      </Route>
      <Route path={`${match.path}/:id`}>
        <Photos />
      </Route>
    </Switch>
  )
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums.albums
  }
}

const mapDispatchToProps = {
  fetchUsers,
  fetchAlbums
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsContainer);

