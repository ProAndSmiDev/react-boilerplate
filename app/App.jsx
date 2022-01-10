import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Page } from './components/Page';

window.addEventListener('load', () => {
    ReactDOM.hydrate(<Page />, document.getElementById('content'));
});
