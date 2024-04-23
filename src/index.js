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
import JQueryData from './CourseData/jquerydata';
import JQuery from './Courses/jquery';
import AngularData from './CourseData/angulardata';
import Angular from './Courses/angular'
import ReactData from './CourseData/reactdata';
import Reactjs from './Courses/react'
import VueData from './CourseData/vuedata';
import Vue from './Courses/vue'
import NodeData from './CourseData/nodedata';
import Node from './Courses/node'
import SpringData from './CourseData/springdata'
import Spring from './Courses/spring'
import MongoDBData from './CourseData/mongodbdata'
import MongoDB from './Courses/mongodb'
import RustData from './CourseData/rustdata'
import Rust from './Courses/rust'


let router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>, 
    errorElement: <NotFound/>,
    children: [{
      path: "/Java",
      element: <Javadata/>,
      children: [{
        path: "/Java/Introduction to Java",
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
        path: "/PHP/Syntax",
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
    },
    {
      path: "/jQuery",
      element: <JQueryData/>,
      children: [{
        path: "/jQuery/Selectors",
        element: <JQuery/>
      }]
    },
    {
      path: "/Angular",
      element: <AngularData/>,
      children: [{
        path: "/Angular/CLI",
        element: <Angular/>
      }]
    },
    {
      path: "/React",
      element: <ReactData/>,
      children: [{
        path: "/React/JSX",
        element: <Reactjs/>
      }]
    },
    {
      path: "/Vue",
      element: <VueData/>,
      children: [{
        path: "/Vue/Vue Instance",
        element: <Vue/>
      }]
    },
    {
      path: "/Node",
      element: <NodeData/>,
      children: [{
        path: "/Node/Node.js Basics",
        element: <Node/>
      }]
    },
    {
      path: "/Spring",
      element: <SpringData/>,
      children: [{
        path: "/Spring/Core Concepts",
        element: <Spring/>
      }]
    },
    {
      path: "/MongoDB",
      element: <MongoDBData/>,
      children: [{
        path: "/MongoDB/Introduction to MongoDB",
        element: <MongoDB/>
      }]
    },
    {
      path: "/Rust",
      element: <RustData/>,
      children: [{
        path: "/Rust/Enums",
        element: <Rust/>
      }]
    },
  
  ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


