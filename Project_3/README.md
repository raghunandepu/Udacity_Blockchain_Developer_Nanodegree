# RESTful Web API with Node.js Framework

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
```
 GET response example for URL http://localhost:8000/block/0

        HTTP/1.1 200 OK
        content-type: application/json; charset=utf-8
        cache-control: no-cache
        content-length: 179
        accept-ranges: bytes
        Connection: close
        {"hash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3","height":0,"body":"First block in the chain - Genesis block","time":"1530311457","previousBlockHash":""}
```

POST /block

example:

```
curl -X "POST" "http://localhost:8000/block" -H 'Content-Type: application/json' -d $'{"body":"block body contents"}'
```
```
POST response example for URL http://localhost:8000/block

        HTTP/1.1 200 OK
        content-type: application/json; charset=utf-8
        cache-control: no-cache
        content-length: 238
        Connection: close
        {"hash":"ffaffeb2330a12397acc069791323783ef1a1c8aab17ccf2d6788cdab0360b90","height":1,"body":"Testing block with test string data","time":"1531764891","previousBlockHash":"49cce61ec3e6ae664514d5fa5722d86069cf981318fc303750ce66032d0acff3"}
```
