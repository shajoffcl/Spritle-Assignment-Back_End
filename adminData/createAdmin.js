const MODEL = require('../app/models/model');
const { admin } = require('./data')

console.log(admin);

exports.refreshAll = async () => {
    await MODEL.deleteMany({})
    await MODEL.insertMany(admin)
};