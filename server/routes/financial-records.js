const express = require("express");
const financialRecordModel = require("../schemas/financial-record");

const router = express.Router();

router.get("/getAllByUserId/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;
        const records = await financialRecordModel.find({ userId: userId });

        if (records.length === 0) {
            return res.status(404).send("No records found for the user");
        }
        res.status(200).json(records);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const newRecordBody = req.body;
        const newRecord = new financialRecordModel(newRecordBody);
        const savedRecord = await newRecord.save();
        res.status(201).json(savedRecord);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const newRecordBody = req.body;
        const record = await financialRecordModel.findByIdAndUpdate(id, newRecordBody, { new: true });

        if (!record) {
            return res.status(404).send("Record not found");
        }
        res.status(200).json(record);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const record = await financialRecordModel.findByIdAndDelete(id);

        if (!record) {
            return res.status(404).send("Record not found");
        }
        res.status(200).json(record);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
