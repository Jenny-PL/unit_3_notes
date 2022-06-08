# Asynchronous JS

Making API calls and loading pages on the web is usually asynchronous, and other code will execute **without waiting for the result of an API call**.


For asynch programming, important to consider:
- Which specific technologies (tools and environment) to use that support running asynchronous code  
- During or after an asynchronous call, what should happen for all the different cases of success and failure  
  
**promise** object is used in asych JS

---

## axios
Package to make HHTP requests in JavaScript
- Note: To use axios in REPLit, install `axios` in packages; if API has a key, add key such as api_key and value into **secrets** folder... similar to **.env**

Example GET request:
```
const axios = require('axios');

axios
  .get('some URL')
  .then((response) => {
    // Code that executes with a successful response goes here
  })
  .catch((error) => {
    // Code that executes with an unsuccessful response goes here
  });
  ```

  **sucess** that will cause code to go into `.then` statement: `200s response` to HHTP request (ie- 200 OK, 201 Created, etc...)

  **failure** that will cause code to flow into `.catch` statement: Not a 200s response code

The code below adds in a `finally()` clause; this is optional and will run after either the `then()` or `catch`.  **finally** always runs!

```
const axios = require('axios');

axios
  .get('https://dog.ceo/api/breeds/list/all')
  .then((response) => {
    console.log('success!');
  })
  .catch((error) => {
    console.log('error!');
  })
  .finally(() => {
    console.log('this is always executed, no matter what!');
  });
```

**Response and error objects**:  
Can use print statements to understand info held in these values:  
  
- response  
- response.status  
- response.headers.date  
- response.data  
- error  
- error.response.status  
- error.response.data  
  
Example with print statments:
```
const axios = require('axios');

axios
  .get('https://dog.ceo/api/breeds/list/all')
  .then((response) => {
    console.log('The value of response is:', response);

    console.log('The value of status inside of response is:', response.status);

    console.log(
      'The date inside header inside response is:',
      response.headers.date
    );

    console.log('The data given back by the API response is:', response.data);
  })
  .catch((error) => {
    console.log('The value of error is:', error);

    console.log(
      'The value of status inside of response is:',
      error.response.status
    );

    console.log(
      'The data given back by the API response is:',
      error.response.data
    );
  });
  ```

## Get HTTP request with query params:
Use axios.get()'s second parameter. This function takes in an optional "config" object.
- `config` object has key:value pair, where key= `params` and value = object holding all the key-value pairs.
- example:
```
const axios = require('axios');

axios
  .get('https://us1.locationiq.com/v1/search.php', {
    params: {
      key: process.env['api_key'],  // discussed below
      q: 'Seattle, Washington, USA',
      format: 'json',
    },
  })
  .then((response) => {
    console.log('success!', response.data);
  })
  .catch((error) => {
    console.log('error!', error.response.data);
  });
  ```


  ## Alternative option for writing async code (without axios), using modern JS

  ```
  const makeApiCallUsingAsync = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/list/all');
      // Code which normally appears in the `then` block.
      console.log(response.data);
    } catch (error) {
      // Code which normally appears in the `catch` block.
      console.log(error);
    }
  };
  ```


Example of managing an API call that depends on another API call:
```
const axios = require('axios');

const LOCATIONIQ_KEY = process.env['api_key'];

const findLatitudeAndLongitude = (query) => {
  let latitude, longitude;
  axios.get('https://us1.locationiq.com/v1/search.php',
  {
    params: {
      key: LOCATIONIQ_KEY,
      q: 'Seattle, Washington, USA',
      format: 'json'
    }
  })
  .then( (response) => {
    latitude = response.data[0].lat;
    longitude = response.data[0].lon;
    console.log('success in findLatitudeAndLongitude!', latitude, longitude);

    // make the next API call here!
    findLocation(latitude, longitude);
  })
  .catch( (error) => {
    console.log('error in findLatitudeAndLongitude!');
  });
}

const findLocation = (latitude, longitude) => {
  axios.get('https://us1.locationiq.com/v1/reverse.php',
  {
    params: {
      key: LOCATIONIQ_KEY,
      format: 'json',
      lat: latitude,
      lon: longitude
    }
  })
  .then( (response) => {
    console.log('success in findLocation!', response.data);
  })
  .catch( (error) => {
    console.log('error in findLocation!');
  });
}

findLatitudeAndLongitude('Seattle, Washington, USA');
```