import app from './src/server';

const port: number = 8080;

app.listen(port, () => console.log(`documentation page: http://localhost:${port}/api-docs/`));
