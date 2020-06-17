const ObjectsToCsv = require('objects-to-csv');
const moment = require('moment')

// Sample data
const data = [
    { uID: '123', name: 'Syprose Gwako', timestamp: "2020-06-11T15:37:44.000Z" },
    { uID: '456', name: 'Victor Chelule', timestamp: 1382086394000 },
    { uID: '789', name: 'Lyanne Mapani', timestamp: "2016-03-12T00:00:00-06:00" },
];
//mapping to manipulate data before conversion
const preprocessedData = data.map((item, i) => ({
    index: i,
    uID: item.uID,
    name: item.name,
    timestamp: moment(item.timestamp).format('MMMM Do YYYY, h:mm:ss a')
}));

// If you use "await", code must be inside an asynchronous function:
(async () => {
    const csv = new ObjectsToCsv(preprocessedData);

    // Save to file:
    await csv.toDisk('./destination.csv');

    // Return the CSV file as string:
    console.log(await csv.toString());
})();
