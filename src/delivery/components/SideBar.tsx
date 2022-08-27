import { BarProps } from "../../../types"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Grid, Link, useMediaQuery } from '@mui/material';
import { TurnedInNot } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';

export const SideBar = ( { drawerWidth }: BarProps) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
    >

      <Drawer
        open={smDown ? true  : false }
        variant={smDown ? 'temporary' : 'permanent'}
        sx={{ 
          display: { xs: 'block'},
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
        }}>

        <Toolbar>
          {/* <Typography variant='h6' noWrap component='div'>AFEX</Typography> */}
          <img id="afex-logo" src="./cambios-afex-logo.png" />
        </Toolbar>

        <Divider />

        <List>
            {
              ['Enero','Febrero','Marzo','Abril',
              'Mayo','Junio','Julio','Agosto','Setiembre',
              'Octubre','Noviembre','Diciembre'].map(text =>(
                <ListItem key={ text } disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>
                    <Grid container>
                      <ListItemText primary={ text }/>
                      <ListItemText secondary="Delivery"/>
                    </Grid>
                  </ListItemButton>

                </ListItem>
              ))

            }
        </List>

      </Drawer>

    </Box>
  )
}