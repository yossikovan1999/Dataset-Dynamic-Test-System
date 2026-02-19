import readCsvFile from "../utils/csv.js";
import {readJsonFile, writeJsonFile} from "../utils/json.js";

const CSV_FILE = "./data/terrorData.csv";
const JSON_FILE = "./data/score.json"

export async function getCsvFile(){

    const result = await readCsvFile(CSV_FILE);
    return result;
}

export async function updateScore(score){

    const jsonData = await readJsonFile(JSON_FILE);

    jsonData.score = Number(jsonData.score) + Number(score);
    jsonData.date = new Date();

    await writeJsonFile(JSON_FILE, jsonData);

    return jsonData.score;
}