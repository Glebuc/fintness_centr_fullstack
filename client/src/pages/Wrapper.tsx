import React from 'react';


type ComponentType = React.ComponentType<any>;

export function withAuth(Component: ComponentType) {
    return function AuthComponent(props: any) {
      const token = localStorage.getItem('token'); 
  
      if (!token) {
        window.location.href = '/login';
        return null;
      }
      return <Component {...props} />;
    };
  }