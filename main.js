var request = new XMLHttpRequest 
  requst.onreadystatechange = function (event) {
   this.readyState === 4 ? this.status === 200 ? 
   console.log(this.responseText) :
     console.warn('error') : null
  }

requst.open("GET","./user.json")

request.send()
