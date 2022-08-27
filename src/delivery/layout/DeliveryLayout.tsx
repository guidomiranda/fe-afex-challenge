import { Box } from "@mui/material";
import { ThemeProviderProps } from '../../../types';
import { NavBar, SideBar } from "../components";

export const DeliveryLayout = ( { children }:ThemeProviderProps ) => {

  const drawerWidth: number = 240;

  return (
    <Box sx={{ display: 'flex'}}>

    <NavBar drawerWidth={ drawerWidth }/>

    <SideBar drawerWidth={ drawerWidth }></SideBar>

    <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
    >
        {/* Toolbar*/}

        { children }

    </Box>



    </Box>
  )
}
