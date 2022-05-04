const express = require('express'); 
const app = express(); 
const port = 5000; //
const options = require('./admin.options');
const {default :AdminBro} = require('admin-bro');
const buildAdminRouter = require('./admin.router')
const mongoose = require('mongoose');



const run = async ()=> {

    await mongoose.connect('mongodb+srv://ecommerce:ecommerce@cluster0.y80vt.mongodb.net/ecommerce?retryWrites=true&w=majority')
    const admin = new AdminBro(options);
    const router = buildAdminRouter(admin);
    app.use(admin.options.rootPath, router);
    app.listen(port, () => console.log(`you app is running on port ${port}`));
}

module.exports = run ;



