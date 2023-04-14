import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './component/Main/Main';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import Blog from './component/Blog/Blog';
import QuizeSection from './component/QuizeSection/QuizeSection';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        { path: '/Statistics', element: <Statistics></Statistics> },
        { path: '/blog', element: <Blog></Blog> },
        {
          path: '/quiz/:quizeData',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizeData}`)
          },
          element: <QuizeSection></QuizeSection>
        },
        {
          path: '/*', element: <p>this route is not found(404)</p>
        }

      ]
    },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
