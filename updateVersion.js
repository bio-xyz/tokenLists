const fs = require('fs');

function updateFileVersion () {
        const tokenList = JSON.parse(fs.readFileSync("./public/bioTokenList.json").toString())
        const latestVersionTokenList = JSON.parse(fs.readFileSync("https://black-sky-1486.on.fleek.co/bioTokenList.json").toString())
        const updatedersion = {
        ...tokenList,
        version: {
            ...tokenList.version,
            major: latestVersionTokenList.version.major + 1
        }
    }
    fs.writeFileSync("./public/bioTokenList.json", JSON.stringify(updatedersion))
}

updateFileVersion()