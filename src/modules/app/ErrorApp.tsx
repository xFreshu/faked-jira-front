import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorApp = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1>Error</h1>
      <h2>{error.statusText || error.message}</h2>
    </div>
  );
};

export default ErrorApp;
