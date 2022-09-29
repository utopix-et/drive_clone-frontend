import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/js/bootstrap.min.js';

import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Forgot from './components/Forgot.js';
import { MainStorage } from "./components/MainStorage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar/>
    <MainStorage/>
  </>
);
