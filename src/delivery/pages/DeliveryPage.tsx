import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { fontSize } from '@mui/system';
import { DeliveryLayout } from '../layout/DeliveryLayout'
import { DeliveryView, TransactionView } from '../../view/';

export const DeliveryPage = () => {
  return (
    <DeliveryLayout>
      <DeliveryView />
      {/*<TransactionView />*/}

      <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor: 'error.main',
          ':horever': { backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>
    </DeliveryLayout>
  )
}
