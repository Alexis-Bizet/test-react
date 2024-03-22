import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function Header (){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container alignItems="center" justifyContent="space-between" style={{marginBottom:20}}>
            <Grid item xs={10} lg={9}>
                <Box>
                    <img src="../images/logo.svg" alt="cat-logo" style={{height: isMobile ? 50 : 100 }} />
                </Box>
            </Grid>
            <Grid item xs={2} lg={3} >
                {isMobile ? (
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                        <React.Fragment>
                            <IconButton color="inherit" {...bindTrigger(popupState)}>
                                <MenuIcon />
                            </IconButton>
                            <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}> 
                                <Link href="#qui-sommes-nous" underline="none" color="inherit">Qui sommes nous ?</Link>
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                                <Link href="#nos-valeurs" underline="none" color="inherit">Nos valeurs</Link>
                            </MenuItem>
                            <MenuItem onClick={popupState.close} sx={{ color: '#93bcad' }}>
                                <Link href="#reservez" underline="none" color="inherit">Réservez !</Link>
                            </MenuItem>
                            </Menu>
                        </React.Fragment>
                            )}
                    </PopupState>
                ) : (
                    <React.Fragment>
                        <Button color="inherit" sx={{ textTransform: 'none', marginRight: 2 }}>
                            <Link href="#qui-sommes-nous" underline="none" color="inherit">Qui sommes nous ?</Link>
                        </Button>
                        <Button color="inherit" sx={{ textTransform: 'none', marginRight: 2 }}>
                            <Link href="#nos-valeurs" underline="none" color="inherit">Nos valeurs</Link>
                        </Button>
                        <Button color="inherit" sx={{ textTransform: 'none', color: '#93bcad' }}>
                            <Link href="#reservez" underline="none" color="inherit">Réservez !</Link>
                        </Button>
                    </React.Fragment>
                )}
            </Grid>
        </Grid>
    )
}
export default Header;