import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = false; // Change this to your actual authentication logic

  if (!profile) {
    return <Redirect to="/signin" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
