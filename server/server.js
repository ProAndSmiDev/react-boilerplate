import express from 'express';
import ReactDOM from 'react-dom/server';
import { Page } from '../app/components/Page';
import { indexTemplate } from './indexTemplate';

const app = express();

app.use('/static', express.static('../docs/client'));

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(Page())),
    );
});

app.listen(8080, () => {
    console.log('Server started on http://localhost:8080');
});
