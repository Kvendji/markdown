function getData (url,callback) {
  var request = Object.assign(
    new XMLHttpRequest, {
      onreadystatechange :function (event) {
        this.readyState === 4 ? this.status === 200 ?
          callback(this.responseText) :
             console.warn('error') : null
      }
    }
  )
  request.open("GET",url)
  request.send()
}

function showMarkup (html) {
  document.body.innerHTML +=html
}

function showText (text) {
document.body.innerHTML += <h3>${text}</h3>
}


var showGaallery = function (response) {
  pictures = JSON.parse(response)
  pictures.forEach(
      pictures => document.body.appendChild(document.createElement('img')).src = pictures.ref 
    )
}


// var func = function (response) {
//   console.log('success')
//   console.log(response)
// }

getData("img.json", showGallery)

getData("hello.txt", showText)

getData("hello.html", showMarkup)
