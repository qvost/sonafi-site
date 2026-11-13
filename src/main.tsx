import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SanofiApp from './App';
import './styles.css';
const root = document.getElementById('root');
if (root)
    createRoot(root).render(<StrictMode><SanofiApp /></StrictMode>);
