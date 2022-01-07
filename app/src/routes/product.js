const express = require('express');
// const multer = require('multer');
// const upload = multer({ dest: './images/pro/' });

const {
    getAllProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/product.controller');

const router = express.Router();

router.route('/').get(getAllProducts).post(createProduct);
//middleware upload file
// (req, res, next) => {
//     upload.single('image');
//     console.log(req.body);
//     next();
// }
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);
module.exports = router;
