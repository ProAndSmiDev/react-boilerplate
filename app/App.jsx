import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Page } from './components/Page';

window.addEventListener('load', () => {
    ReactDOM.render(<Page />, document.getElementById('content'));
});
