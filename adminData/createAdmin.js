const ADMIN_MODEL = require('../app/models/admin.model');
const { admin } = require('./data')

exports.refreshAll = async () => {
    await ADMIN_MODEL.deleteMany({})
    await ADMIN_MODEL.insertMany(admin)
};