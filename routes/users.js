const express = require("express");
const router = express.Router();
const db = require("../data/db");

router.use("/products/:id", async function (req, res) {
    try {
        const [rows] = await db.execute("SELECT * FROM products WHERE id = ?", [req.params.id]);
        res.render("product-details", { product: rows[0] });
    }
    catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Server error");
    }
});
router.get("/products", async function (req, res) {
    try {
        const [products,] = await db.execute("SELECT * FROM products");
        res.render("products", {
            products: products
        });
    }
    catch (err) {
        console.log(err)
    }

});

router.get("/", async function (req, res) {

    try {
        const [products,] = await db.execute("SELECT * FROM products WHERE isActive=1");
        res.render("index", {
            products: products
        });
    }
    catch (err) {
        console.log(err)
    }

});

module.exports = router;