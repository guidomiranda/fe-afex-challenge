import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main:  '#e5eefd'
        },
        secondary: {
            main: '#fdf4e5'
        },
        error: {
            main: red.A400
        }
    }
})