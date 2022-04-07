const PrivateModel = require('../models/PrivateModel.js');
const Private_Data = require('../Data/Private_Data.js');

const PrivateData = async () => {
    try {
        await PrivateModel.deleteMany({});
        await PrivateModel.insertMany(Private_Data);

        console.log('Private Data imported Successfully');

    } catch (error) {
        console.log('Error: ', error.message);
    }
}

module.exports = PrivateData;