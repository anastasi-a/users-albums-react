import {connect} from "react-redux";
import {useEffect} from "react";
import {withRouter} from "react-router";
import {fetchPhotos} from "../../store/actions";
import {makeStyles} from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    fontSize: "18px"
  },
  imageList: {
    width: 1000,
    height: 615,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


const Photos = (props) => {
  useEffect(() => {
    props.fetchPhotos(props.match.params.id);
  }, [])

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList cols={3} rowHeight={185} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div" className={classes.title}>
            Album: {props.selectedAlbum && props.selectedAlbum.title}
          </ListSubheader>
        </ImageListItem>
        {props.photos.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.url} alt={item.title} />
            <ImageListItemBar title={item.title}/>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  const selectedAlbum = state.albums.albums
    .find(album => album.id == props.match.params.id);

  return {
    photos: state.albums.photos,
    selectedAlbum
  }
}

const mapDispatchToProps = {
  fetchPhotos
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Photos));
