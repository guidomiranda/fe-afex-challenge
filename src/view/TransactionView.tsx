import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"

export const TransactionView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1}}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='ligth'> 28 de agosto, 2023</Typography>
        </Grid>

        <Grid item> 
            <Button color='primary' >
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder="Ingrese un título"
                label='Título'
                sx={{ border: 'none', mb: 1 }}
            />
        </Grid>

        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder="Que paso hoy?"
                minRows={ 5 }
            />
        </Grid>
    </ Grid>
  )
}
