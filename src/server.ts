import express from 'express';

const app = express();

app.get('/teste', (request, response) => {
   return response.send("Olá NLW Together");
});

app.post('/teste-post', (request, response) => {
   return response.send("Olá NLW método post");
})

app.listen(3000, () => console.log('Server is running!'));