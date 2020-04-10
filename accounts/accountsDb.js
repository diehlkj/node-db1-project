const db = require('../data/dbConfig.js');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
};

function get() {
    return db('accounts');
}

function getById(id) {
    return db('accounts')
    .where({ id });
}

function insert(account) {
    return db('accounts')
    .insert(account)
    .then(newIds => {
        return getById(newIds[0]);
    });
}

function update(id, changes) {
    return db('accounts')
    .where({ id })
    .update(changes);
}

function remove(id) {
    return db('accounts')
    .where('id', id )
    .del();
}