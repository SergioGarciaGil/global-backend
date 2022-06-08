const { Router } = require('express');

const router = Router();

const {getProducts, getProductById, createProduct , getProductByCat, updateProduct,deleteProduct} = require ('../controlers/products/');


router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.get("/categories/:categorie", getProductByCat);
router.put("/:id", updateProduct);
router.delete("/:id",deleteProduct);


module.exports = router;