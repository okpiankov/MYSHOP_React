import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, requiredRole }) => {
    
  const user = JSON.parse(localStorage.getItem('user'));
  //   console.log(user);

  if (!user || !user?.token || requiredRole !== user?.data?.role) {
    return <Navigate to="/" replace />; 
  }
  return children;

  // Можно так но при переходе по адресу не авторизованным пользователем будет пустая страница
  // if (user || user?.token || requiredRole == user?.data?.role) {
  //   return children;
  // }
  //или вообще так:
  // if (requiredRole == user?.data?.role) {
  //   return children;
  // }
};
