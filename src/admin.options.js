const AdminBro = require('admin-bro');
const Products =require('../Models/Products');
const Sellers =require('../Models/Sellers');
const AdminBroMongoose = require('admin-bro-mongoose');
AdminBro.registerAdapter(AdminBroMongoose);
const options = {
resources:[Products,Sellers],

}

module.exports = options ;