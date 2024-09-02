import ReactDOM, { createRoot } from 'react-dom/client';
import Products from './views/Products';
import Resources from './views/Resources';
import Features from './views/Features';
import './index.css';
 



const root = ReactDOM.createRoot(document.getElementById("root"))
 const currentPath = window.location.pathname;
 
 if (currentPath === "/") {
   root.render(<Products />);
 }
 else if (currentPath === "/Resources") {
   root.render(<Resources />);
 }
 else if (currentPath === "/Features") {
   root.render(<Features />);
 }
 else{
   root.render(<h1>404 NotFound</h1>)
 }