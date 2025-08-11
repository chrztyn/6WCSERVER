import express from 'express';
const __dirname = import.meta.dirname;
import bodyParser from 'body-parser';

const app = express();
app.use(express.static('public'));
const urlEncoderParser = bodyParser.urlencoded({extended: false});

//Page Routes
app.get('/', (req, res) => {res.sendFile(__dirname + '/pages/home.html');});
app.get('/studentForm', (req, res) => {res.sendFile(__dirname + '/pages/student.html');}); 
app.get('/adminForm', (req, res) => {res.sendFile(__dirname + '/pages/admin.html');});

//API Routes
app.get('/getUser', (req,res) => {
    const response = {
        firstName : req.query.firstName,
        lastName : req.query.lastName,
    }

    console.log("Response is: ", response);
    res.end(`Received Data: ${JSON.stringify(response)}`);
})

app.get('/getStudent', (req,res) => {
    const response = {
        studentID : req.query.studentID,
        firstName : req.query.firstName,
        lastName : req.query.lastName,
        section: req.query.section,
    }

    console.log("Response is: ", response);
    res.end(`Received Data: ${JSON.stringify(response)}`);
})

app.post('/postAdmin', urlEncoderParser, (req,res) => {
    const response = {
        adminID : req.body.adminID,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        department: req.body.department,
    };

    console.log("Admin Data: ", response);
    res.end(JSON.stringify(response));
})

app.get('/user', (req, res) => {
    const userId = req.query.id;
    const userName = req.query.name;
    if (userId && userName){
        res.send(`<html><body><h1>User ${userName}'s ID is: ${userId} </h1></body></html>`)
    }else res.status(400).send('User ID and name is required');
})



const server = app.listen(5000, () => {
    console.log(`Server running at http://500`);
})