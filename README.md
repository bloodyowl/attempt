# attempt

[![browser support](https://ci.testling.com/bloodyowl/attempt.png)](https://ci.testling.com/bloodyowl/attempt)

[![Build Status](https://travis-ci.org/bloodyowl/attempt.svg)](https://travis-ci.org/bloodyowl/attempt)


## install

```sh
$ npm install bloody-attempt
```

## require

```javascript
var attempt = require("bloody-attempt")
```

## api

### attempt(fn) > boolean

returns whether or not `fn` execution has been without error.

### attempt.withValue(fn) > value

returns the result of `fn()` or the error it threw.

### attempt.all(object) > key || null

tries to execute functions in object until one does not error.
returns the key matching the error free function.
if none executed properly, null is returned.

```javascript
attempt.all({
  EVENT_OBJECT: function(){
    document.createEventObject()
  },
  CUSTOM_EVENT: function(){
    new CustomEvent(
      "attempt",
      {
        bubbles: false,
        cancelable: false
      }, {
        detail: {}
      }
    )
  }
})
// => "CUSTOM_EVENT"
```
