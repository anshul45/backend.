<h1>
Getting started 
</h1>
<p>First clone repository to your local machine</p>
<code>git clone https://github.com/anshul45/backend..git</code>
<p>Then run <code>npm install</code> to install all node modules</p>
<h1>Add postgres to knex orm</h1>
<p>You have to add values inside <code>/connectDb/knexfile.ts</code> </br> 
<code>connection: {
      host: '127.0.0.1',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database:'postgres'
    },</code></p>
<p>you have add ur postgres host, port, user, password and database.</p>

<h1>After doing all this you have run following command in ur code editor terminal</h1>

<h3>First you have to migrate database</h3>
Run <code>npm run migrate</code>

<h3>Then start ur app </h3>
Run <code>npm run start</code>


<h1>This are api endpoints for user.</h1>
<h3>To create a user</h3>
<p><code>http://localhost:3001/api/v1/user</code>  <code>Post Request</code>  </br>
body need this data.
</br>
<code>{
 "name":"test name1"
}</code>
 </p>
<h3>To get all users</h3>
 <p><code>http://localhost:3001/api/v1/users/</code>  <code>Get Request</code> 
 </p>
 <h3>To get user by id</h3>
 <p><code>http://localhost:3001/api/v1/user/:id</code>  <code>Get Request</code> 
 </br>
 we need to add userid insted of :id 
 </p>


 <h1>This are api endpoints for address.</h1>

 <h3>To create address</h3>
<p><code>http://localhost:3001/api/v1/address/</code>  <code>Post Request</code>  </br>
body need this data.
</br>
<code>{
  "userId":1,
  "street":"test2",
  "city":"test2",
  "country":"test2"
}</code>
 </p>


 <h3>To get adress by  userId</h3>
 <p><code>http://localhost:3001/api/v1/addressbyuser/:id</code>  <code>Get Request</code> 
  </br>
 we need to add userid insted of :id 
 </p>

 <h3>To get address by  addressid</h3>
 <p><code>http://localhost:3001/api/v1/address/:id</code>  <code>Get Request</code> 
 </br>
 we need to add addressId insted of :id 
 </p>
