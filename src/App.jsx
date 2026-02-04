import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import "./App.css"
import AllProperties from './pages/AllProperties';
// import PropertyDetails from './pages/PropertyDetails';
// import PropertiesPage from './pages/PropertiesPage';

// 1. Define your routes inside App.jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/properties", element: <AllProperties /> },
      // { path: "/property/:id", element: <PropertyDetails /> },
    ],
  },
]);

function App() {
  // 2. This is the perfect place to add Global State Providers later
  return (
    <RouterProvider router={router} />
  );
}

export default App;