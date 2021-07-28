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
import urlStore, { IUrl } from '../stores/urlStore';
import { observer } from 'mobx-react';



//State definitions
interface IUrlState {
  textInput: string;
  urls: IUrl[];
}
interface AppProps { }
@observer
class Application extends React.Component<AppProps, IUrlState> {

  constructor(props: AppProps) {
    super(props);
    this.state = { textInput: "", urls: [] };
  }

  loadData():void {
    this.setState({ urls: urlStore.urls });
  }
  componentDidMount():void {
    this.loadData();
  }

  useStyles = makeStyles((theme: Theme) =>
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

  //Submit Handler
  handleSubmit = () => {
    urlStore.addUrl(this.state.textInput)
  }


  //The function returns a React Fragment with a form and all the registered URLS
  render(): JSX.Element {
    // const classes = this.useStyles();
    return (

      <Container >
        <Grid container spacing={3} >
          <Grid item xs={12} >
            <form onSubmit={this.handleSubmit}>
              <TextField type="text" onChange={e => this.setState({ textInput: e.target.value })} value={this.state.textInput} />
              <Button variant="outlined" type="button" color="primary">
                Save
              </Button>
            </form>
          </Grid>
          {

            this.state.urls.map((t: IUrl, i: number) => (
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
                    <Button onClick={() => {urlStore.toggleDoneUrl(i);this.loadData()}}> {t.done ? '✔️' : '❌'}</Button>
                    <Button onClick={() => {urlStore.removeUrl(i); this.loadData()}}>🗑️</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    );

  }

}

export default Application;
