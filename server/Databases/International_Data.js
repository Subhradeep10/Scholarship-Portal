const InternationalModel = require('../models/InternationalModel.js');
const International_Data = require('../Data/International_Data.js');

const InternationalData = async () => {
    try {
        await InternationalModel.deleteMany({});
        await InternationalModel.insertMany(International_Data);

        console.log('International Data imported Successfully');

    } catch (error) {
        console.log('Error: ', error.message);
    }
}

module.exports = InternationalData;