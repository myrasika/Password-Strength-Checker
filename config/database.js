const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://deadpools:idontknow@ds249787.mlab.com:49787/password-checker',
    secret: crypto,
    db: 'MEAN-project'

}
