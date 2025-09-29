import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'team', element: <Team /> },
      { path: 'services', element: <Services /> },
      { path: 'case-studies', element: <CaseStudies /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ]
  }
]);