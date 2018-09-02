# Blockchain Data

To build a RESTful API using a Node.js framework that will interface with our private blockchain.

By configuring an API for your private blockchain you expose functionality that can be consumed by several types of web clients ranging from desktop, mobile, and IoT devices.

## Node.js framework
Express.js

## Getting Started

```
npm install
```

## Testing

To test code:
After installing the dependencies as stated above, open a command prompt or shell terminal execute:

```
node index.js
```

Use a software like postman or a simple CURL on the terminal to send the requests to the base url http://localhost:8000 with one of the below supported endpoints:

GET /block/{BLOCK_HEIGHT}

example:
```
 curl http://localhost:8000/block/0
```

POST /block

example:

```
curl -X "POST" "http://localhost:8000/block" -H 'Content-Type: application/json' -d $'{"body":"block body contents"}'
```