import {makeStyles} from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const useStyles = makeStyles({
  head: {
    fontWeight: "bold",
    fontSize: "16px"
  }
});

const List = (props) => {
  const classes = useStyles();
  const Item = props.component;

  return (
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {props.titles.map(title => (
              <TableCell key={title} className={classes.head}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List;
