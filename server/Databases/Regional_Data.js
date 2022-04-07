const RegionalModel = require('../models/RegionalModel.js');
const Regional_Data = require('../Data/Regional_Data.js');

const RegionalData = async () => {
    try {
        await RegionalModel.deleteMany({});
        await RegionalModel.insertMany(Regional_Data);

        console.log('Regional Data imported Successfully');

    } catch (error) {
        console.log('Error: ', error.message);
    }
}

module.exports = RegionalData;