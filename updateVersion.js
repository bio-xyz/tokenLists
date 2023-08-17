const {promises: fs} = require('node:fs');

async function updateBioTokenFileVersion () {
    const fileContent = await fs.readFile("./public/bioTokenList.json", "utf-8")
    const tokenList = JSON.parse(fileContent)
    const latestVersionTokenList = await (await fetch("https://bioxyz.on.fleek.co/bioTokenList.json")).json()

    const updatedVersion = {
        ...tokenList,
        version: {
            ...tokenList.version,
            major: latestVersionTokenList.version.major + 1
        }
    }
    
    await fs.writeFile("./public/bioTokenList.json", JSON.stringify(updatedVersion, null, 2))
}

async function updateBiddingTokenFileVersion () {
    const fileContent = await fs.readFile("./public/biddingTokenList.json", "utf-8")
    const tokenList = JSON.parse(fileContent)
    const latestVersionTokenList = await (await fetch("https://bioxyz.on.fleek.co/biddingTokenList.json")).json()

    const updatedVersion = {
        ...tokenList,
        version: {
            ...tokenList.version,
            major: latestVersionTokenList.version.major + 1
        }
    }
    
    await fs.writeFile("./public/biddingTokenList.json", JSON.stringify(updatedVersion, null, 2))
}

updateBioTokenFileVersion()
updateBiddingTokenFileVersion()