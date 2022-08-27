import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from '../../auth/pages/LoginPage';
import { DeliveryPage } from '../../delivery/pages/DeliveryPage';

export const DeliveryRoutes = () => {
  return (
    <Routes>
        <Route path="/" element = { <LoginPage /> }/>
        <Route path="/dashboard" element = { <DeliveryPage /> } />
        <Route path="/*" element = { <Navigate to ="/" /> }/>
    </Routes>
  )
}
