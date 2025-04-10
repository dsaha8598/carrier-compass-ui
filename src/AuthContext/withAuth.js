import React from 'react';
import { AuthContext } from './AuthContextContext';

export function withAuth(Component) {
  return function WrappedWithAuth(props) {
    return (
      <AuthContext.Consumer>
        {(auth) => <Component {...props} auth={auth} />}
      </AuthContext.Consumer>
    );
  };
}
