//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/angularapp'));

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/angularapp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
app.get('*', function(req, res) {
    res.sendfile('src\app\users\dashboard\dashboard.component.html'); // load our index.html file
});