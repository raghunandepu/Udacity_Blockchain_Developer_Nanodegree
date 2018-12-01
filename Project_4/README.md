## Build status

[![Build Status](https://semaphoreci.com/api/v1/ibrunotome/udacity-blockchain-developer-nanodegree/branches/master/badge.svg)](https://semaphoreci.com/ibrunotome/udacity-blockchain-developer-nanodegree)

## Project overview

Your web service will provide a few new features to your users. The goal is to allow users to notarize star ownership using their blockchain identity.

## Project specification 

https://review.udacity.com/#!/rubrics/2098/view

---

## Framework used

Express.js

## Getting started

Open a command prompt or shell terminal after install node.js and execute:

```
npm install
```

## Testing

```
npm test
```

## Run

```
node index.js
```

## Endpoint description

### 1. Blockchain ID validation request

**Method**

```
POST
```

**Endpoint**

```
http://localhost:8000/requestValidation
```

**Parameters**

```
address - A bitcoin address, you can take it from your project1
```

**Example**

<img src="https://albumizr.com/skins/bandana/index.php?key=yUPZ#1">

### 2. Blockchain ID message signature validation

**Method**

```
POST
```

**Endpoint**

```
http://localhost:8000/message-signature/validate
```

**Parameters**

```
address - The addres that you used in last step
signature - You can take it from the Electrum wallet or make it by code (see test/index.test.js)
```

<img src="https://albumizr.com/skins/bandana/index.php?key=yUPZ#2">

### 3. Star registration

**Method**

```
POST
```

**Endpoint**

```
http://localhost:8000/block
```

**Parameters**

```
address - The addres that you used in last step
star - Containing dec, ra and story (max 500 bytes)
```

**Example**

<img src="https://albumizr.com/skins/bandana/index.php?key=yUPZ#3">

### 4. Get block by height

**Method**

```
GET
```

**Endpoint**

```
http://localhost:8000/block/:height
```

**Parameters**

```
height - The height of block
```

**Example**

<img src="https://albumizr.com/skins/bandana/index.php?key=yUPZ#4">

### 5. Get block by address

**Method**

```
GET
```

**Endpoint**

```
http://localhost:8000/stars/address:address
```

**Parameters**

```
address - The address used so far
```

**Example**

<img src="https://albumizr.com/skins/bandana/index.php?key=yUPZ#5">

### 6. Get block by hash

**Method**

```
GET
```

**Endpoint**

```
http://localhost:8000/stars/hash:hash
```

**Parameters**

```
hash - The hash of one block created before
```

**Example**

<img src="https://albumizr.com/skins/bandana/index.php?key=yUPZ#6">

## Udacity honor code

Giving credits for places that helped me to do this project

- Udacity Project4 Concepts section
- https://github.com/bitcoinjs/bitcoinjs-message
- https://bitcoin.stackexchange.com/questions/49946/understanding-signing-messages-with-bitcoinjs-lib