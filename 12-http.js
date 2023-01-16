const http = require('http')
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our homepage')
    // need to add the return so JS would stop running after this res
    return
  }
  // check for about page
  else if (req.url === '/about') {
    res.end('Here is our short history')
    return
  }
  // check for when we don't have the requested page like contact
  else
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back to homepage</a>
  `)
})

server.listen(5000)
