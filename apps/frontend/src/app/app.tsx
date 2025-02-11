import { ThemeProvider } from '@libs/components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },
]);

export function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
