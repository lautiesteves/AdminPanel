const express = require('express');
const bodyParser = require('body-parser');
const searchController = require('./controllers/SearchController');
const queryController = require('./controllers/QueryController');
const queryService = require('./services/QueryService');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.json());

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(3000, (req, res) => {
    console.log("Listening on Port 3000");
});

app.get('/', async(req, res) => {
    res.render('home', {});
});

app.get('/api/searches', (req, res) => {
    searchController.getAllSearches();
});

app.get('/api/searches/:searchId', (req, res) => {
    searchController.getSearchById(req.params.searchId);
});

app.post('/api/searches', (req, res) => {   
    searchController.createNewSearch(req.body.searchCriteria);
    const query = queryController.parseQuery(req.body.searchCriteria);
    queryController.createQuery(query);
    queryController.postQuery(query);
});

app.delete('/api/searches/:searchId', (req, res) => {
    searchController.deleteSearchById(req.params.searchId);
});

app.get('/api/queries', async (req, res) => {
    const allQueries = await queryController.getAllQueries();
    console.log("server:" + allQueries);
    res.send(allQueries);
});

app.get('/api/queries/:queryId', (req, res) => {
    queryController.getQueryById(req.params.queryId);
});

app.delete('/api/queries/:queryId', (req, res) => {
    queryController.deleteQueryById(req.params.queryId);
});



