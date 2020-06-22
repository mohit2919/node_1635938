const express = require('express')
const router = express.Router()
router.use(express.json())

router.get('/', (req, res) => {
    res.send('Hello there!')
})

router.post('/', (req, res) => {
    const associate = req.body.find(i => i.name === 'abc')
    if (!associate) return res.status(404).send('associate not found')
    associate.info.systemID = 'C305390'
    res.send(associate)
})

module.exports = router;