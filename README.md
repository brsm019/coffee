# Colmore Coffee / eCommerce site to purchase coffee and equipment

View deployed site here: http://colmorec.herokuapp.com/

## Desktop View
<img width="1433" alt="Equipment1" src="https://user-images.githubusercontent.com/70659641/128630529-86cf8c6b-e0ab-40a2-b194-60d8913a5ab9.png">
<img width="1433" alt="Equipment2" src="https://user-images.githubusercontent.com/70659641/128630622-21cf1465-514c-469a-a45a-354c47e2905b.png">

## Details

Full-stack application that acts as an eCommerce site allowing users to sign up and purchase coffee and coffee equipment

## Client side built with
- React
- React Router
- React Stripe JS
- React Hook Form
- Mdbreact
- Bootstrap
- Yup
- Axios
- JSX
- JavaScript
- HTML
- CSS

## Server side built with
- MongoDB
- Mongoose
- Jsonwebtoken
- Bcrypt
- Stripe
- Express
- Node


### Frontend
The frontend was created with the React, utilising the component based build, creating reusable components that are used throughout the site. React Router was used to make multiple pages and in order to maintain state throughout the site a global state was created with useReducer and context API.
### Backend
The backend was created with nodejs and express, using the non-relational database mongoDB to store user credentials. Jsonwebtokens was used to authenticate and authorise users and to secure the process, the sensitive user data was hashed with bcrypt module. To create a full eCommerce site, the payment system was made using Stripe's API.

## Quick Start

Clone down the repo. 

The following should be added to your .env file:

Mongo_URI - Create a mongo databse to get this parameter.
Stripe_test_key - You will have to set up a stripe account. To make a dummy payment use 42424 recursively.
Node_env should be set to production.
Port set to 4000.

```
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:4000 and client on http://localhost:3000
```

## Deployment
Set up a Heroku project and add your config vars.
There is a Heroku post build script so that you do not have to compile your React frontend manually, it is done on the server. Simply push to Heroku and it will build and load the client index.html page.




