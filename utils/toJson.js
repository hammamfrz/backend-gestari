const toJSON = (csv) => {
  const fs = require("fs");
  const csvFilePath = "./seeders/" + csv;

  const csvData = fs.readFileSync(
    csvFilePath,
    { encoding: "utf-8" },
    function (err, csvData) {
      if (err) {
        console.log(err);
      }

      return csvData;
    }
  );
  const csvRecordsArray = csvData.split(/\r?\n|\r/);

  const headers = ["kode_katalog", "type", "name", "price", "satuan", "image"];
  const jsonArray = [];

  for (let i = 0; i < csvRecordsArray.length; i++) {
    const currentRecord = csvRecordsArray[i].split(",");
    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentRecord[j];
      obj["createdAt"] = new Date();
      obj["updatedAt"] = new Date();
      if (headers[j] === "price") {
        
        obj[headers[j]] = parseFloat(currentRecord[j].replace(".", ""));
      }
    }
    jsonArray.push(obj);
  }
  return jsonArray;
};

module.exports = toJSON;
