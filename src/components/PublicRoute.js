import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ children, ...routeProps }) => {
  const profile = false; // Change this to your actual authentication logic

  if (!profile) {
    return <Redirect to="/" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRoute;
