import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    },
    addButton: {
      padding: 0,
      minWidth: 0
    },
    editButton: {
      display: "block",
      marginTop: theme.spacing(1)
    }
  })
);

export default function Editor() {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <h1>Title of the Page</h1>
        </Grid>
        <Grid item xs={2}>
          <List>
            <ListItem>
              <Button variant="outlined" fullWidth>
                edit
              </Button>
            </ListItem>
            <ListItem>
              <Button variant="outlined" fullWidth>
                edit
              </Button>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <TextField
        id="outlined-multiline-flexible"
        multiline
        rows="20"
        // value={values.multiline}
        // onChange={handleChange('multiline')}
        // className={classes.textField}
        margin="normal"
        //helperText="hello"
        variant="outlined"
        fullWidth
      />
    </>
  );
}
