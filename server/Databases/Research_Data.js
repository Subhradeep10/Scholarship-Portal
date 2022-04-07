const ResearchModel = require('../models/ResearchModel.js');
const Research_Data = require('../Data/Research_Data.js');

const ResearchData = async () => {
    try {
        await ResearchModel.deleteMany({});
        await ResearchModel.insertMany(Research_Data);

        console.log('Research Data imported Successfully');

    } catch (error) {
        console.log('Error: ', error.message);
    }
}

module.exports = ResearchData;