const getFlagValue = require("./expGetFlag")

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)