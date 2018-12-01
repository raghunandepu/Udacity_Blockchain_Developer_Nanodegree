

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

<img src="https://albumizr.com/ia/4bced5c28fa0a665beebdf946a518f78.jpg">

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

<img src="https://albumizr.com/ia/fa77a6cfb7aa1c6ce135a7827a6c5bf4.jpg">

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

<img src="https://albumizr.com/ia/fbc338caeeb80557156355df038124a7.jpg">

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

<img src="https://albumizr.com/ia/7fe17a28876e98d59c50aaacfd8389da.jpg">

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

<img src="https://albumizr.com/ia/9b6cf0970b622603cc08b4153e08372a.jpg">

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

<img src="https://albumizr.com/ia/f7a8eb028d45c462ac6c000d9d0f8c26.jpg">

## Udacity honor code

Giving credits for places that helped me to do this project

- Udacity Project4 Concepts section
- https://github.com/bitcoinjs/bitcoinjs-message
- https://bitcoin.stackexchange.com/questions/49946/understanding-signing-messages-with-bitcoinjs-lib
