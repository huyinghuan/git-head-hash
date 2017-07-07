# Get Current branch last commit hash
## Install
```
npm install  git-head-hash
```

## Use

```
const gitHeadHash = require('git-head-hash')
console.log(gitHeadHash())
console.log("==============")
console.log(gitHeadHash(process.cwd()))

console.log("===============")

gitHeadHash(function (err, result) {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
})

console.log("===============")
gitHeadHash(process.cwd(), function (err, result) {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
})

```

## Test

```
npm test
```