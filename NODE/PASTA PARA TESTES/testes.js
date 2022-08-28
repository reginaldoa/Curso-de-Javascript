module.exports = 'casa'

const path = require ('path') // o path vai até a pasta principal, NODE NO CASO
console.log(path.resolve())
console.log(__dirname) // o dirname vai até a pasta atual

const pessoas = [
    {pessoa: 'eu'},
    {pessoa: 'vc'},
    {pessoa: 'nos'},
    {pessoa: 'eles'},
]

const json = JSON.stringify(pessoas,'',1)
console.log(json)