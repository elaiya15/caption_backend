const express = require("express");
const multer = require("multer");
const router = express.Router();
const fs = require("fs");
const employeeModule = require("../modules/employeeModule");
const auth = require("../modules/authModule");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage, limits: { fileSize: 1 } });

router.get("/get", employeeModule.getEmployees);

router.put(
  "/update/:ids",
  upload.single("file"),
  employeeModule.updateEmployees
);

router.post("/create", upload.single("files"), employeeModule.createEmployees);

router.delete("/delete/:id", employeeModule.deleteEmployees);

module.exports = router;
