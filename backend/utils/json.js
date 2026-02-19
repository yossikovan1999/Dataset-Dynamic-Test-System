import fs from "fs/promises";


//======================================
//              readJsonFile
//======================================
export async function readJsonFile(filePath) {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}


//======================================
//              writeJsonFile
//======================================
export async function writeJsonFile(filePath, data) {
  const stringJson = JSON.stringify(data, null, 2);
  await fs.writeFile(filePath, stringJson, "utf-8");
}

//======================================
//              writeJsonFile
//======================================
export async function appendToJsonFile(fileName, data){

  const jsonData = await readJsonFile(fileName);

  jsonData.push(data);

  await writeJsonFile(fileName, jsonData);
}