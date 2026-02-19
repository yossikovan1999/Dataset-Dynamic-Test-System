import fs from "fs";
import csv from "csv-parser";

const results = [];

export default function readCsvFile(filepath) {
  return new Promise((resolve, reject) => {
    fs
      .createReadStream(filepath)
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })
      .on("error", (error) => reject(results))
      .on("end", () => {
        resolve(results);
      });
  });
}

