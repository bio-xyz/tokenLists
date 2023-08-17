const { promises: fs } = require("node:fs");

async function updateFileVersion(fileName) {
  const fileContent = await fs.readFile(`./public/${fileName}`, "utf-8");
  const tokenList = JSON.parse(fileContent);
  const latestVersionTokenList = await (
    await fetch(`https://bioxyz.on.fleek.co/${fileName}`)
  ).json();

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
