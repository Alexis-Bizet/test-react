import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Values() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const values = [
        {
            title: 'Passion du café',
            body: "Notre équipe est passionnée par l'art de préparer le café. Chaque grain est soigneusement sélectionné pour offrir une expérience gustative exceptionnelle. Nous nous engageons à vous offrir des saveurs riches et uniques dans chaque tasse.",
            image: '/icons/coffee-icon.svg'
        },
        {
            title: 'Bien-être des chats',
            body: "Le bonheur et le bien-être de nos amis félins sont au cœur de notre philosophie. Nous offrons un environnement sûr et confortable à nos chats résidents, où ils peuvent interagir avec nos clients et recevoir toute l'attention et l'affection qu'ils méritent.",
            image: '/icons/cat-icon.svg'
        },
        {
            title: 'Engagement environnemental',
            body: "Nous sommes soucieux de l'impact environnemental de notre entreprise. C'est pourquoi nous nous engageons à utiliser des produits respectueux de l'environnement et à promouvoir des pratiques durables dans tous les aspects de notre activité, de la sélection des fournisseurs à la gestion des déchets.",
            image: '/icons/plant-icon.svg'
        },
    ];

    return (
        <Box style={{ marginTop:30, padding: '30px'}} id='nos-valeurs'>
            <Typography variant={isMobile ? "h3" : "h2"} gutterBottom style={{ fontWeight: 'bold', textAlign: 'center', color:'#71a894' }} >
                Nos Valeurs
            </Typography>
            <Grid container spacing={3} textAlign="center">
                {values.map((value, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                        <Box sx={{ width: '100px'}}>
                        <CardMedia
                            component="img"
                            image={value.image}
                            alt={value.title}
                            
                            />
                        </Box>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{fontWeight:'bold'}}>
                                    {value.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {value.body}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Values;