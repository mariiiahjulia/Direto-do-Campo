import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'produtos', Component: Products },
      { path: 'produto/:id', Component: ProductDetail },
      { path: 'sobre', Component: About },
      { path: 'contato', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
],{
  basename: '/Direto-do-Campo/',
});
