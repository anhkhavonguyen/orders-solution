# orders-solution
Orders Solution 

There are 2 micro service by Nodejs framework, using MongoDB, using Winston at middleware for logging error/debug/info to static file and elastic search for searching <br/>
Using Angular 7 and Angular material for display UI. <br/>
The main function of the app is orders and payments management.<br/>

First step please run "npm i" for install required package for the application.<br/>

-Orders UI (port 4200) : please run "ng serve" for running front end app.<br/>

-Orders Service ( port 4000): <br/>
    + get all orders <br/>
    + get order by id <br/>
    + add new order <br/>
    + update order <br/>
    + cancel order <br/>
    + delete order <br/>
    
Run "node orders-service" for running orders service.<br/>

-Payments Service ( port 3000 ): <br/>
    + get all payments <br/>
    + add new payment (handle state of order: update order to CONFIRM state) <br/>
    + delete payment <br/>

Run "node payments-service" for running payments service.<br/>

Currently we have the general scenario:  <br/>
    0. Default screen is payment managements, there is menu for switching orders management and payments management. <br/>
    1. Create new order with order info (number,description,id) at create order screen. <br/>
    2. Order created saved to DB with CREATED state.<br/>
    3. Orders service will call to Payments service with the order information and the Payment service return to Order state is CONFIRMED.<br/>
    4. The app auto redirect to orders management screen.<br/>
    5. Orders service will call api update to order state is CONFIRMED.<br/>
