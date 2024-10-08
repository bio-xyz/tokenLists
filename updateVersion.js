const { promises: fs } = require("node:fs");

async function updateFileVersion(fileName) {
  const fileContent = await fs.readFile(`./public/${fileName}`, "utf-8");
  const tokenList = JSON.parse(fileContent);
  let latestVersionTokenList;

  try {
    latestVersionTokenList = await (
      await fetch(`https://tokenlists.bio.xyz/${fileName}`)
    ).json();
  } catch (e) {
    latestVersionTokenList = {
      version: {
        major: tokenList.version.major,
        minor: 0,
        patch: 0,
      },
    };
  }

  const updatedVersion = {
    ...tokenList,
    version: {
      ...tokenList.version,
      major: latestVersionTokenList.version.major + 1,
    },
  };

  await fs.writeFile(
    `./public/${fileName}`,
    JSON.stringify(updatedVersion, null, 2)
  );
}

updateFileVersion("bioTokenList.json");
updateFileVersion("biddingTokenList.json");
