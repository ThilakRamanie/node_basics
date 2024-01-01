const fsPromises = require('fs').promises
const path = require('path')

const fsOps = async() => {
    try {
        const dataRead = await fsPromises.readFile(path.join(__dirname, 'sample.txt'),"utf8");
        console.log(dataRead)
        await fsPromises.writeFile(path.join(__dirname, "write.txt"),"Write data");
        await fsPromises.appendFile(path.join(__dirname, "write.txt"),"\nAppend data");
        await fsPromises.rename(path.join(__dirname, "write.txt"),path.join(__dirname,"writeAppend.txt"));
        const latestDataRead = await fsPromises.readFile(path.join(__dirname, 'writeAppend.txt'),"utf8");
        console.log(latestDataRead)
    }
    catch(e) {
        console.error(e);
    }
}
fsOps();