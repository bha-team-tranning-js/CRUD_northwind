const express = require('express');
const router = express.Router();

const employeeRouter = require('./employeeRouter');
const productRouter = require('./productRouter');
const supplierRouter = require('./supplierRouter');
const purchaseOrderRouter = require('./purchaseOrderRouter');

router.use('/employees', employeeRouter);
router.use('/products', productRouter);
router.use('/suppliers', supplierRouter);
router.use('/purchase_orders', purchaseOrderRouter);

module.exports = router;
