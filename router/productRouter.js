const express = require("express");
const router = express.Router();
const productModule = require("../modules/productModule");
const auth = require("../modules/authModule");

router.get("/get", productModule.getProducts);

router.put("/update/:id", auth.authorizeUser, productModule.updateProducts);

router.post("/create", auth.authorizeUser, productModule.createProducts);

router.delete("/delete/:id", auth.authorizeUser, productModule.deleteProducts);

module.exports = router;
