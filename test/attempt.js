var tape = require("tape")
var attempt = require("..")

tape("attempt", function(test){
  test.equal(
    attempt(function(){
      return "foo"
    }),
    true
  )
  test.equal(
    attempt(function(){
      throw "foo"
    }),
    false
  )
  test.end()
})

tape("attempt.withValue", function(test){
  test.equal(
    attempt.withValue(function(){
      return "foo"
    }),
    "foo"
  )
  test.deepEqual(
    attempt.withValue(function(){
      throw "foo"
    }),
    new Error("foo")
  )
  test.deepEqual(
    attempt.withValue(function(){
      throw new TypeError("foo")
    }),
    new TypeError("foo")
  )
  test.end()
})

tape("attempt.all", function(test){
  test.equal(
    attempt.all({
      FOO : function(){
        throw 1
      },
      BAR : function(){
        throw 2
      },
      BAZ : function(){
        return 3
      }
    }),
    "BAZ"
  )
  test.equal(
    attempt.all({
      FOO : function(){
        throw 1
      },
      BAR : function(){
        throw 2
      },
      BAZ : function(){
        throw 3
      }
    }),
    null
  )
  test.end()
})
