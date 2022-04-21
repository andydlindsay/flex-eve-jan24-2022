// async await

const response = await client.query('SELECT * FROM users;)

client.query('SELECT * FROM users;)
  .then(response => {});