const gitHeadHash = require('./index')
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