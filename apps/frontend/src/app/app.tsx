import { TicTacToePage } from '@khel-haru/tic-tac-toe';
import { ThemeProvider } from '@libs/components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TicTacToePage />,
  },
]);

export function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
