import { ShineButton } from './components/ShineButton/ShineButton'
import { AuthProvider } from './context/authContext';
import { router } from './Router';
import { RouterProvider } from 'react-router';

export function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>    
  );
}
