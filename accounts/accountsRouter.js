const express = require('express');
const Accounts = require('./accountsDb');
const router = express.Router();


// get
// --- Tested --- Working ---
router.get('/', (req, res) => {
    Accounts.get()
        .then(accountData => {
            res.status(200).json({ accountData });
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: "Sorry, there was a problem on our end handling your [GET] request...", err})
        });
});

// get by ID
// --- Tested --- Working ---
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Accounts.getById(id)
        .then(accountData => {
            res.status(200).json({ accountData });
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: "Sorry, there was a problem on our end handling your [GET] request...", err})
        });
});

// post
// --- Tested --- Working ---
router.post('/', (req, res) => {
    const newAccount = req.body;

    Accounts.insert(newAccount)
        .then(accountData => {
            res.status(201).json({ accountData });
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: "Sorry, there was a problem on our end handling your [PUSH] request...", err})
        });
});

// put
// --- Tested --- Working ---
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Accounts.update(id, changes)
        .then(accountData => {
            res.status(201).json({ accountData });
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: "Sorry, there was a problem on our end handling your [PUT] request...", err})
        });
});

// delete
// --- Tested --- Working ---
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Accounts.remove(id)
        .then(accountData => {
            res.status(200).json({ MESSAGE: `Successfully deleted account id: ${id}`, RECORDS_DELETED: accountData });
        })
        .catch(err => {
            res.status(500).json({ MESSAGE: "Sorry, there was a problem on our end handling your [DELETE] request...", err})
        });
});

module.exports = router;
