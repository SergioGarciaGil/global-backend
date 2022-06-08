const { Router } = require('express');

const router = Router();

const {getProducts, getProductById, createProduct , getProductByCat, updateProduct,deleteProduct} = require ('../controlers/products/');


router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.get("/categories/:categorie", getProductByCat);
router.put("/products/:id", updateProduct);
router.delete("/products/:id",deleteProduct);


module.exports = router;