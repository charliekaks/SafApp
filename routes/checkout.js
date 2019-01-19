var request = require('request'),
  oauth_token = "L8G7GB3xQJvKqdtIgdFyoGXYjX1i",
  url = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl"
  auth = "Bearer " + oauth_token;

  request(
    {
      method: 'POST',
      url : url,
      headers : {
        "Authorization" : auth
      },
      json : {
        "ShortCode": "601510",
        "ResponseType": " ",
        "ConfirmationURL": "http://ip_address:port/confirmation",
        "ValidationURL": "http://ip_address:port/validation_url"
      }
    },
    function (error, response, body) {
      if (error){
          console.log("There was an error")
      }
      response.send("Success");x
      console.log(body)
    }
  )