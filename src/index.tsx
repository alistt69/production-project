import { createRoot } from 'react-dom/client';
import 'shared/config/i18n';
import { RouterProvider } from 'react-router-dom';
import { router } from 'app/providers/router';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found.');
}

createRoot(root).render(<RouterProvider router={router} />);
