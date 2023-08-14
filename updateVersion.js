const fs = require('fs');

async function updateFileVersion () {
        const tokenList = JSON.parse(fs.readFileSync("./public/bioTokenList.json").toString())
        const latestVersionTokenList = await (await fetch("https://black-sky-1486.on.fleek.co/bioTokenList.json")).json()
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