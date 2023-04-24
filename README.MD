# Nodejs 20 Updates

Read the blog at: [https://pacifist.id/article/nodejs-20](https://pacifist.id/article/nodejs-20)

Several command to start the features:
```json
  "scripts": {
    "start:permission": "node --experimental-permission --allow-fs-read=$(pwd) --allow-fs-write=$(pwd)/tmp src/permission/permission.js",
    "start:loader": "node --experimental-loader ./src/loader/https-loader.mjs src/loader/app.mjs",
    "start:regex": "node src/regex-v/regex.js",
    "start:sea": "node --experimental-sea-config sea-config.json",
    "start:iswellformed": "node src/string-isWellFormed/string.js",
    "start:testrunner": "node src/test-runner/testrunner.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```