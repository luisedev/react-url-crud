import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


//import del store

interface IUrl {
  name: string;
  done: boolean;
}
//@observer
function Application(): JSX.Element {

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
        backgroundColor: "#fff",
        color: "#333",

      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    }),
  );


  const classes = useStyles();
  //State definitions
  const [newUrl, setNewUrl] = useState<string>('')


  type FormElement = React.FormEvent<HTMLFormElement>;
  //getURLs from localstorage
  const getUrls = () => {
    return oldUrls;
  }
  const oldUrls: IUrl[] = JSON.parse(localStorage.getItem('urls') || '');
  const [Urls, setUrls] = useState<IUrl[]>(oldUrls)

  //Submit Handler
  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addUrl(newUrl)
    setNewUrl('');
  }

  //Adds an URL
  const addUrl = (name: string): void => {
    const newUrl: IUrl[] = [...Urls, { name, done: false }]
    setUrls(newUrl);
    localStorage.setItem('urls', JSON.stringify(newUrl));
  }
  //Crossthrough an URL
  const toggleDoneUrl = (i: number): void => {
    const newUrls: IUrl[] = [...Urls];
    newUrls[i].done = !newUrls[i].done;
    setUrls(newUrls);
    localStorage.setItem('urls', JSON.stringify(newUrls));
  }
  //Removes an URL
  const removeUrl = (i: number): void => {
    const newUrls: IUrl[] = [...Urls];
    newUrls.splice(i, 1);
    setUrls(newUrls);
    localStorage.setItem('urls', JSON.stringify(newUrls));
  }
  //The function returns a React Fragment with a form and all the registered URLS
  return (

    <Container className={classes.root} onLoad={getUrls}>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} >
          <form onSubmit={handleSubmit}>
            <TextField type="text" onChange={e => setNewUrl(e.target.value)} value={newUrl} />
            <Button variant="outlined" type="submit" color="primary">
              Save
            </Button>
          </form>
        </Grid>
        {
          Urls.map((t: IUrl, i: number) => (
            <Grid item xs={12} sm={6} key={i}>
              <Card key={i}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Info:
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    <a href={t.done ? '/' : t.name} rel="noreferrer" target="_blank" style={{ textDecoration: t.done ? 'line-through' : '' }} >{t.name}</a>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => toggleDoneUrl(i)}> {t.done ? '✔️' : '❌'}</Button>
                  <Button onClick={() => removeUrl(i)}>🗑️</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

export default Application;
