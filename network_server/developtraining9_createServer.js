function server(callback){
  let request = {
    insa: "hello"
  }
  let response = {
    insa: "bye"
  }
  return callback(request,response)
}

server(function(request, response){
  console.log(request.insa)
  console.log(response.insa)
})