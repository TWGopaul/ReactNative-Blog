*** JSON server ***
This project requires installation and set up of JSON server. The package.json file should contain:
{
  "name": "jsonserver",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "db":"json-server -w db.json",
    "tunnel": "ngrok http 3000"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "json-server": "^0.17.0",
    "ngrok": "^4.2.2"
  }
}
*** Setting up ngrok URL ***
In order to use ngrok you must provide jsonServer.js a forwarding address. After running
 'tunnel' in the command prompt from the root directory, copy and past the first
  forwarding address inside the config.js file. Note, this url will expire every 2 hours 
  for the free version of ngrok. 

The config.js file should contain:
// Set up ngrok forwarding address
const url = "<FIRST LISTED FORWARDING ADDRESS>";

export default url;


The jsonServer.js file imports the key and uses it to access the API.
