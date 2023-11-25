import {createRoot} from "react-dom/client";
import {default as App} from '@/app';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

container.render(<App />);