import React from 'react';

const Customers = (props) => {
  return (
    <div className="customers">
      <ul className="customer">
      {props.customers.map((customer) => {
        return (
          <div key={customer.id} className={customer.name}>
            {customer.name}
          </div>
        )
      })}
      </ul>
    </div>
  )
}
// want to list what months they ordered
export default Customers;
