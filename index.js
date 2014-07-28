function attempt(fn){
  try {
    fn()
    return true
  }
  catch (err) {
    return false
  }
}

attempt.withValue = function(fn){
  try {
    return fn()
  }
  catch (err) {
    if(!(err instanceof Error)) {
      return new Error(err)
    }
    return err
  }
}

attempt.all = function(object){
  var key
  for(key in object) {
    if(attempt(object[key])) {
      return key
    }
  }
  return null
}

module.exports = attempt
