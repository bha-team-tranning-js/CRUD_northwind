const express = require('express');
const apiRouter = express.Router();

// const routerSupplier = require('./supplier.routes');
// const routerProduct = require('./product.routes');
// const routerCategory = require('./category.routes');
// const routerProductDetail = require('./product_details.routes');
// const routerOrderDetail = require('./order_detail.routes');
//
// const routerRole = require('./role.routes');
// const routerAccount = require('./account.routes');
// const routerEmployee = require('./employee.routes');
// const routerCustomer = require('./customer.routes');
// const routerOrder = require('./order.routes');
// const routerShipper = require('./shipper.routes');
// const routerOrderStatus = require('./order_status.routes');

// apiRouter.use('/suppliers', routerSupplier);
// apiRouter.use('/products', routerProduct);
// apiRouter.use('/categories', routerCategory);
// apiRouter.use('/product-details', routerProductDetail);
// apiRouter.use('/order-details', routerOrderDetail);
// //
// apiRouter.use('/roles', routerRole);
// apiRouter.use('/accounts', routerAccount);
// apiRouter.use('/employees', routerEmployee);
// apiRouter.use('/customers', routerCustomer);
// apiRouter.use('/orders', routerOrder);
// apiRouter.use('/shippers', routerShipper);
// apiRouter.use('/order-status', routerOrderStatus);

// const loginRoute = require('./login');
const productRoute = require('./product');
const categoryRoute = require('./category');
const supplierRoute = require('./supplier');

// apiRouter.use('/auth', loginRoute);
apiRouter.use('/products', productRoute);
apiRouter.use('/categories', categoryRoute);
apiRouter.use('/suppliers', supplierRoute);

module.exports = apiRouter;
