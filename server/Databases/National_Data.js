const NationalModel = require('../models/NationalModel.js');
const National_Data = require('../Data/National_Data.js');

const NationalData = async () => {
    try {
        await NationalModel.deleteMany({});
        await NationalModel.insertMany(National_Data);

        console.log('National Data imported Successfully');

    } catch (error) {
        console.log('Error: ', error.message);
    }
}

module.exports = NationalData;