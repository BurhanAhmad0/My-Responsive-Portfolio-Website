const express = require('express')

// Schema Import
const Contact = require('../model/contactFormSchema.js')

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        // console.log(req.body)
        let { email, description } = req.body;
        let data = {
            email,
            description
        }
        let dataInsert = new Contact(data);
        await dataInsert.save()
        res.status(201).send('Contact saved successfully');
    } catch (error) {
        res.status(500).send('Error saving contact');
    }
})

module.exports = router
