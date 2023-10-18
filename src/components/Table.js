import React from 'react';
import './Table.css';

function Table() {
  return (
    <div className='complete'>
    <div className="t-container">
      <div className="header">
        <div className="header-left">Product Sell</div>
        <div className="header-right">
          <input type="text" placeholder="🔍Search" className="search-input" />
          <select className="dropdown">
            <option value="all">last 30 days</option>
            <option value="inStock">In Stock</option>
            <option value="outOfStock">Out of Stock</option>
          </select>
        </div>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Total Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="product-cell">
                  <img src="../3d abstract.jpg" alt="Product" className="product-image" />
                  <div className="product-details">
                    <p className="product-name">Abstract 3D</p>
                    <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </td>
              <td>32 in stock</td>
              <td><b>$45.99</b></td>
              <td>20</td>
            </tr>
            <tr>
              <td>
                <div className="product-cell">
                  <img src="../sarphen.jpg" alt="Product" className="product-image" />
                  <div className="product-details">
                    <p className="product-name">Sarphens Illustration</p>
                    <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </td>
              <td>32 in stock</td>
              <td><b>$45.99</b></td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default Table;
