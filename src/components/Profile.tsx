import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import avatar from '../static/images/avatar.png';


class Profile extends React.Component {

    render(): JSX.Element {
        return (

            < Grid item xs={12} md={4} style={{ margin: "10px" }} >
                <Card className="card" style={{ margin: "15px" }}>
                    <CardActionArea href="https://mypublicinbox.com/luisedev">
                        <CardMedia
                            style={{ width: "100%" }}
                            component="img"
                            alt="LuiseDev"
                            src={avatar}
                            title="LuiseDev"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Luis Eduardo Álvarez
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Entusiasta de la programación y la tecnología, en constante renovación.Autodidacta, responsable, creativo. Investigo y realizo proyectos relacionados con Inteligencia Artificial y CiberSeguridad.En mis ratos libres me gusta ponerme al día sobre las últimas tendencias en tecnología,patinar con mi skate y también leer comics.
                                Desarrollo de Aplicaciones Multiplataforma.

                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <b>  Actualmente, cursando Máster en Ciberseguridad y Seguridad de la Información.
                                    Posgrado en Organizaciones Ágiles y Transformación digital.
                                    Developer & Security Researcher en el equipo de Ideas Locas - CDCO - Telefónica.  06/2020 - 07/2021
                                    Security & Develompent en MyPublicInbox </b>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="cardActions">
                        <Button className="infoButton" size="small" color="primary" href="https://mypublicinbox.com/luisedev">
                            MyPublicInbox
                        </Button>
                        <Button className="infoButton" size="small" color="primary" href="https://www.linkedin.com/in/luisedeveloper/">
                            Linkedin
                        </Button>
                        <Button className="infoButton" size="small" color="primary" href="https://twitter.com/LuiseDev">
                            Twitter
                        </Button>
                    </CardActions>
                </Card>
            </Grid >


        );
    }
}

export default Profile;
