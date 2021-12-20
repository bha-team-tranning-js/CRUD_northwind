const express = require('express');
const router = express.Router();

const {
    getAllSuppliers,
    createSupplier,
    getSupplier,
    updateSupplier,
    deleteSupplier,
} = require('../controllers/supplierController');

router.route('/').get(getAllSuppliers).post(createSupplier);
router
    .route('/:id')
    .get(getSupplier)
    .put(updateSupplier)
    .delete(deleteSupplier);

module.exports = router;
