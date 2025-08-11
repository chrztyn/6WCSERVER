import express from 'express';
const __dirname = import.meta.dirname;

const app = express();
app.use(express.static('public'));

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

app.get('/getAdmin', (req,res) => {
    const response = {
        adminID : req.query.adminID,
        firstName : req.query.firstName,
        lastName : req.query.lastName,
        department: req.query.department,
    }

    console.log("Response is: ", response);
    res.end(`Received Data: ${JSON.stringify(response)}`);
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