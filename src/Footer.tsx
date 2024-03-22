import * as React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

function Footer() {
    return (
        <Box sx={{ padding: '30px', backgroundColor: '#f3f0ea' }} id="reservez">
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={4}>
                    <Typography variant="h2" gutterBottom style={{fontWeight:'bold'}}>
                        Réservez votre table !
                    </Typography>
                    <Typography variant="body1">
                        Réservez dès maintenant votre table pour une expérience caféinée inoubliable en compagnie de nos adorables chats. Plongez dans l'ambiance apaisante de Café Chatouille et laissez-vous séduire par nos délices caféinés et nos compagnons félins. Réservez dès aujourd'hui et préparez-vous                         à vivre un moment magique de détente et de plaisir.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                    <form noValidate autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Nom*" variant="standard" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Prénom*" variant="standard" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Numéro de téléphone*" variant="standard" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Email*" variant="standard" />
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end', }}>
                                <Button variant="contained" style={{backgroundColor: '#71a894', textTransform: 'none', borderRadius : 30, fontWeight : 'bold'}} type="submit">
                                    Envoyer
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;