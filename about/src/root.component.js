import React from "react";
import './PurchaseOrder.css';

export default function Root() {
  const triggerToast = (message, type) => {
    const event = new CustomEvent("showToast", { detail: { message, type } });
    window.dispatchEvent(event);
  };

  const handlePlaceOrder = () => {
    triggerToast("Purchase order placed successfully!", "success");
  };

  const handleUpdateOrder = () => {
    triggerToast("Order updated successfully!", "info");
  };

  const handleCancelOrder = () => {
    triggerToast("Order canceled.", "error");
  };

  return (
    <section className="purchase-order">
      <h1>Purchase Order Management</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1001</td>
            <td>Product A</td>
            <td>Pending</td>
            <td>$500</td>
            <td>
              <button className="btn-edit" onClick={handleUpdateOrder}>Update</button>
              <button className="btn-cancel" onClick={handleCancelOrder}>Cancel</button>
            </td>
          </tr>
          <tr>
            <td>1002</td>
            <td>Product B</td>
            <td>Shipped</td>
            <td>$300</td>
            <td>
              <button className="btn-edit" onClick={handleUpdateOrder}>Update</button>
              <button className="btn-cancel" onClick={handleCancelOrder}>Cancel</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn-add-order" onClick={handlePlaceOrder}>Place New Order</button>
    </section>
  );
}
