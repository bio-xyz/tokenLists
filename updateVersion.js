const fs = require('fs');

function updateFileVersion () {
        const tokenList = JSON.parse(fs.readFileSync("./public/bioTokenList.json").toString())
        const updatedersion = {
        ...tokenList,
        version: {
            ...tokenList.version,
            major: tokenList.version.major + 1
        }
    }
    fs.writeFileSync("./public/bioTokenList.json", JSON.stringify(updatedersion))
}

updateFileVersion()