const express = require('express');
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors  = require('cors')

const app = express();

app.use(cors())

mongoose.connect('mongodb+srv://Shravya:shravya24@cluster0.2nzzh.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true})
mongoose.connection.once('open',()=>{
    console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
