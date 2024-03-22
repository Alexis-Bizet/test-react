import * as React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function AboutUs(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box style={{backgroundColor: "#f3f0ea", marginTop:30, display: 'flex', alignItems: 'center'}} id="qui-sommes-nous">
            <Grid container spacing={1} direction={isMobile ? 'column-reverse' : 'row'} alignItems="center" justifyContent='center' style={{ padding:30 }}>
                <Grid item xs={12} md={4} style={{ textAlign: isMobile ? 'center' : 'left'}}>
                    <img src="/images/image-about-us.png" alt="About Us" style={{width: '60%'}} />
                </Grid>
                <Grid item xs={12} md={4} style={{ textAlign: isMobile ? 'center' : 'left' }}>
                    <Typography variant={isMobile ? "h4" : "h2"} gutterBottom style={{ fontWeight: 'bold'}} >
                        Qui sommes nous ?
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Bienvenue chez Café Neko, l'endroit où le café et les chats se rencontrent pour créer une expérience unique en son genre.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Chez Café Neko, nous sommes passionnés par deux choses : le café de qualité et le bien-être des chats. Fondé par des amoureux des félins et des aficionados du café, Café Neko est bien plus qu'un simple café. C'est un refuge pour les amoureux des chats, un havre de paix où l'on peut savourer une bonne tasse de café tout en câlinant nos adorables résidents à quatre pattes.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
export default AboutUs;