const _fs = require('fs')
const _child_process = require('child_process')
const _path = require('path')
module.exports = function (workspace, fn) {
    if (!workspace) {
        workspace = process.cwd()
    }
    if (typeof (workspace) != "string") {
        fn = workspace
        workspace = process.cwd()
    }
    let commandStr = `git log -1 --format="%H"`;
    let err = null
    let result = ""
    if (!_fs.existsSync(_path.join(workspace, ".git"))) {
        err = new Error("No git project")
    } else {
        result = _child_process.execSync(commandStr, { cwd: workspace })
        result = String(result).replace(/^\s/, "").replace(/\s$/, "")
        if (/^[a-zA-Z0-9]{40}$/.test(result)) {
            result =  result
        }else{
             err = new Error(result)
        }
    }
    if(fn){
        return fn(err, result)
    }
    if(err){
        throw err
    }
    return result
    
}