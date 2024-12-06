import React from 'react';
import { createRoot } from 'react-dom/client';
import { Gui } from './components/gui';
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<Gui />);

