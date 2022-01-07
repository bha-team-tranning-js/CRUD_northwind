const db = require('../config/db.config');

const Order = function (
    order_date,
    ship_address,
    shipping_fee,
    total_price,
    note,
    shiped_date,
    order_status_id,
    customer_id,
    shipper_id,
    employee_id
) {
    (this.order_date = order_date),
        (this.ship_address = ship_address),
        (this.shipping_fee = shipping_fee),
        (this.total_price = total_price),
        (this.note = note),
        (this.shiped_date = shiped_date),
        (this.order_status_id = order_status_id),
        (this.customer_id = customer_id),
        (this.shipper_id = shipper_id),
        (this.employee_id = employee_id);
};

//static func
Order.findAll = async function () {
    const sql = 'SELECT * FROM Orders';
    const [result, _] = await db.query(sql);
    if (!result.length) throw 'Không tìm thấy bản ghi nào !';
    return result;
};

Order.findOne = async function (id) {
    const sql = `SELECT * FROM Orders WHERE Order_id=${id}`;
    const [result, _] = await db.query(sql);
    if (!result.length) throw `Không tìm thấy bản ghi với id ${id} !`;
    return result;
};
Order.deleteById = async function (id) {
    const sql = `DELETE FROM Orders WHERE Order_id=${id}`;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw `Xóa bản ghi với id ${id} thất bại !`;
    return;
};
Order.prototype.save = async function () {
    const sql = `
    INSERT INTO Orders
      (
        order_date,
        ship_address,
        shipping_fee,
        total_price,
        note,
        shiped_date,
        order_status_id,
        customer_id,
        shipper_id,
        employee_id
        )
    VALUES (
        "${this.order_date}",
        "${this.ship_address}",
        "${this.shipping_fee}",
        "${this.total_price}",
        "${this.note}",
        "${this.shiped_date}",
        "${this.order_status_id}",
        "${this.customer_id}",
        "${this.shipper_id}",
        "${this.employee_id}"
      )
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Thêm bản ghi không thành công !';
    return;
};

Order.prototype.updateById = async function (id) {
    const sql = `
    UPDATE 
      Orders
    SET 
        order_date="${this.order_date}",
        ship_address="${this.ship_address}",
        shipping_fee= "${this.shipping_fee}",
        total_price="${this.total_price}",
        note="${this.note}",
        shiped_date="${this.shiped_date}",
        order_status_id="${this.order_status_id}",
        customer_id="${this.customer_id}",
        shipper_id="${this.shipper_id}",
        employee_id="${this.employee_id}"
    WHERE 
        Order_id = ${id}
  `;
    const [result, _] = await db.query(sql);
    if (result.affectedRows === 0) throw 'Cập nhật thất bại!';
    return;
};

module.exports = Order;
