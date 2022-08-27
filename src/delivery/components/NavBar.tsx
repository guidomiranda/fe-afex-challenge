import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography, Grid } from '@mui/material';
import { BarProps } from '../../../types';


export const NavBar = ( { drawerWidth  = 240 }: BarProps) => {
  console.log(`calc(100%) - ${drawerWidth}px)`);
  return (
    <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${ drawerWidth }px`}
        }}
    >

    <Toolbar>
        <IconButton 
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' }}}
        >
            <MenuOutlined />
        </IconButton>

        <Grid container direction='row' justifyContent='space-between' alignItems='center'>

          <Typography variant='h6' noWrap component='div'> Deliveries </Typography>

          <IconButton color='error'>
            <LogoutOutlined />
          </IconButton>

        </Grid>


    </Toolbar>
    </AppBar>
  )
}
