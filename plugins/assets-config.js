import { cpSync, readFileSync, writeFileSync } from "fs"

export const assetsConfig = () => {
  return {
    name: "assets-config",
    closeBundle: async () => {
      cpSync(`${process.cwd()}/statics`, `${process.cwd()}/dist/statics`, {
        recursive: true,
      })

      const { devDependencies, packageManager, ...packageJson } = JSON.parse(
        readFileSync(`${process.cwd()}/package.json`, "utf8"),
      )

      packageJson.scripts = { start: "node main.js" }
      writeFileSync(
        `${process.cwd()}/dist/package.json`,
        JSON.stringify(packageJson, null, 2),
      )
    },
  }
}

export default assetsConfig
