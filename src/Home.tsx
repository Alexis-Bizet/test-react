import * as React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Home(){

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
        <Grid container spacing={1} alignItems="center" style={{ paddingLeft: isMobile ? 0:300, textAlign: isMobile ? 'center' : 'left' }}>
        <Grid item xs={12} md={4}>
            <Typography variant={isMobile ? "h3" : "h2"} gutterBottom style={{ fontWeight: 'bold'}}>
                Bienvenue chez Café Neko
            </Typography>
            <Typography variant={isMobile ? "h6" : "h5"} gutterBottom style={{ fontWeight: 'bold' }}>
                L'endroit où le café rencontre les ronronnements
            </Typography>
            <Typography variant="body1" gutterBottom style={{ marginBottom:10 }}>
                Bienvenue dans notre univers où chaque tasse de café est accompagnée d'une dose d'amour félin
            </Typography>
            <Button variant="contained" style={{ backgroundColor: '#71a894', textTransform: 'none', borderRadius : 30, fontWeight : 'bold', padding:15,  marginBottom:10 }} >
                Nous contacter
            </Button>
        </Grid>
        <Grid item xs={12} md={8} style={{ textAlign: isMobile ? 'center' : 'left' }}>
            <img src="/images/cat-hero-section.png" alt="Cat" style={{width: '60%'}} />
        </Grid>
    </Grid>
</Box>
    );
}
export default Home;