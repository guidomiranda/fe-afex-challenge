import { Route, Routes } from 'react-router-dom';
import { AuhtRoutes } from '../auth/routes/AuhtRoutes';
import { DeliveryRoutes } from '../delivery/routes/DeliveryRoutes';

export const AppRouter = () => {
  return (
    <Routes>
          {/*Login y registro*/}
          <Route path="/auth/*" element={<AuhtRoutes />}/>
          {/*Delivery View*/}
          <Route path="/*" element={<DeliveryRoutes />}/>
        <Route />
    </Routes>
  )
}
