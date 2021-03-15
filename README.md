# dealers_choice_react

CURRENT ISSUES:
- can't get monthId and customerId on seeded order data in the db
- webpack is not rebuilding / watching file changes
  - I have restarted my computer, uninstalled and reinstalled webpack and webpack-cli
- can't use a <br> tag within my mapping in Customers.js


 RESOLVED ISSUES:
 - originally wrote const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:3000/kb_creamery_2', { logging: false });
 NOTE: the port is 5432 for pg! Silly syntax mistake was made

- localhost3000 not rendering data:
  - error: props are undefined
NOTE: Needed an additional () wrapping around the axios get


Goal:
KB Creamery order site:
Months are listed, and there's an order form field to input customer name and the month they are placing an order for. The intention is that this page would be meant for the owner of KB creamery to manage orders that come in

Table Associations:
- Months
  - ice cream types

- Order
  - orderMade: Bool
  - customer_id
  - month_id

- Customer
  - name
  - email
  - id
