//Dependencies
const morgan = require('morgan');
const express = require('express');
const app = express();
//routes
const user = require('./routes/user');
//middleware
const notFound = require('./middleware/notFound');
const index = require('./middleware/index');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", index);
app.use("/user", user);
app.use(notFound);
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});

//video 12 ok