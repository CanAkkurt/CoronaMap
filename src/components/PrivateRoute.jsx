import { useMemo } from 'react';
import { Navigate, Outlet, Route, useLocation } from 'react-router'; //react router dom v6
import { useSession } from '../contexts/AuthProvider';

export default function PrivateRoute({ children, role, ...rest }) {
  const { isAuthed, hasRole } = useSession();
 

  const canShowRoute = useMemo(() => {
    if (!role) return isAuthed;
    return isAuthed && hasRole(role);
    
  }, [isAuthed, role, hasRole]);
 
  return (canShowRoute ? <Outlet /> : <Navigate to="/log-in"/>)
  
}