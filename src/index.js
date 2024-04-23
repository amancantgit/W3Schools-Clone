import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './MyComponent/Home';
import NotFound from './MyComponent/NotFound';
import Javadata from './CourseData/javadata';
import Java from './Courses/java';
import HTMLdata from './CourseData/htmldata';
import HTML from './Courses/html';
import DotNet from './Courses/dotnet';
import PHPdata from './CourseData/phpdata';
import PHP from './Courses/php';
import DotNetdata from './CourseData/dotnetdata';
import JavaScriptdata from './CourseData/javascriptdata';
import JavaScript from './Courses/javascript';
import TypeScriptdata from './CourseData/typescriptdata';
import TypeScript from './Courses/typescript';


let router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>, 
    errorElement: <NotFound/>,
    children: [{
      path: "/Java",
      element: <Javadata/>,
      children: [{
        path: "/Java/Introduction",
        element: <Java/>,
      }]
    },
    {
      path: "/HTML",
      element: <HTMLdata/>,
      children: [{
        path: "/HTML/Introduction",
        element: <HTML/>,
      }]
    },
    {
      path: "/.Net",
      element: <DotNetdata/>,
      children: [{
        path: "/.Net/Introduction to .NET",
        element: <DotNet/>
      }]
    },
    {
      path: "/PHP",
      element: <PHPdata/>,
      children: [{
        path: "/PHP/Install",
        element: <PHP/>
      }]
    },
    {
      path: "/JavaScript",
      element: <JavaScriptdata/>,
      children: [{
        path: "/JavaScript/Variables",
        element: <JavaScript/>
      }]
    },
    {
      path: "/TypeScript",
      element: <TypeScriptdata/>,
      children: [{
        path: "/TypeScript/Introduction to TypeScript",
        element: <TypeScript/>
      }]
    }
    
  
  ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


