import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import Profile from './Profile';
import { IArticle } from "../interfaces/IArticle";

let articles: IArticle[] = [
    {
        title: "Patrón Arquitectónico MicroFrontEnds",
        description: " La mayoría de las personas que estéis leyendo este artículo, habréis oído hablar o incluso trabajado con microservicios que llegaron para dividir la estructura de monolito en la parte BackEnd...",
        articleUrl: "https://www.elladodelmal.com/2020/07/aplicaciones-web-escalables-con-el.html",
        blog: "El lado del mal",
        imageUrl: "https://1.bp.blogspot.com/-d8w3jIlvG5s/XxbYMMcjlnI/AAAAAAAA3vs/EgFmCsbYHIkKUdgQUdOEu9dB20aGoEU3wCLcBGAsYHQ/s800/micro0.jpg"
    }
    , {
        title: "ATTPwn: Emulación de un ataque de ransomware",
        description: "Hoy en día existe una gran cantidad sistemas Windows 10 sin actualizar. Este hecho, puede suponer un verdadero riesgo, no solo para las organizaciones sino para el usuario particular.Como hemos visto...",
        articleUrl: "https://www.elladodelmal.com/2020/07/attpwn-emulacion-de-un-ataque-de.html",
        blog: "El lado del mal",
        imageUrl: "https://1.bp.blogspot.com/-MC6oHqS3GwE/Xx6GFojTquI/AAAAAAAA310/Y3B5eueCQnAl0rpDN-jNfeJ-71E9b51TACLcBGAsYHQ/s800/attpwn0.jpg"
    },
    {
        title: "Phishing: Estafas y ataques de actualidad",
        description: "Debido a la pandemia el número de ciberdelitos creció un 85% en 2020 y como bien sabemos es debido a que muchas personas se pasaron al trabajo en remoto, lo que se tradujo en nuevos targets para los ciberdelincuentes...",
        articleUrl: "https://www.elladodelmal.com/2021/04/phishing-estafas-y-ataques-de.html",
        blog: "El lado del mal",
        imageUrl: "https://1.bp.blogspot.com/-ozNOGdqC-j4/YH217tg5ToI/AAAAAAAA7fY/HoaFOpebRq0Lk-ltK40gJ5fUGG7BOY2GQCLcBGAsYHQ/s800/phishing0.jpg"
    },
    {
        title: "Seguridad para desarrollar un frontend web",
        description: "El mundo de las aplicaciones web está en constante renovación, se desarrollan nuevos frameworks y herramientas, se implementan nuevos patrones arquitectónicos como los MicroFrontEnds...",
        articleUrl: "https://www.elladodelmal.com/2020/08/algunos-consejos-de-seguridad-para.html",
        blog: "El lado del mal",
        imageUrl: "https://1.bp.blogspot.com/-cJmslJGvQPI/X0PAP6_vsiI/AAAAAAAA4Es/M7tI0rRQu74fwWGWCq-7NdONx-9jEjhtQCLcBGAsYHQ/s800/web0.jpg"
    }];

class Home extends React.Component {



    render(): JSX.Element {
        return (
            <Grid container
                direction="row"
                justifyContent="center" style={{ marginTop: "10px" }}>
                {/* Profile */}
                <Profile />
                {/* Articles */}
                <Grid container
                    direction="row" justifyContent="center" item xs={12} md={7} style={{ border: "1px" }}>
                        {
                        articles.map((article:IArticle, i:number)=>(
                            <Grid item xs={12} md={6} key={i} >
                            <Card className="card" style={{ margin: "5px" }}>
                                <CardActionArea href={article.articleUrl}>
                                    <CardMedia
                                        style={{ width: "100%", height: "250px" }}
                                        component="img"
                                        alt={article.title}
                                        src={article.imageUrl}
                                        title={article.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {article.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {article.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className="cardActions">
                                    <Button className="infoButton" size="small" color="primary" href={article.articleUrl}>
                                        {article.blog}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))
                        }
                </Grid>

            </Grid>
        );
    }
}

export default Home;
