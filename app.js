function getGiphyData() {
  var searchTerm = document.querySelector("#search");
  var url =
    "https://api.giphy.com/v1/gifs/search?api_key=wOkuLOpg0lyr0TN1NMtr0qIAsJpFW7rn&q=" +
    searchTerm;

  fetch(url)
    .then(data => data.json())
    .then(res => {
      console.log(res);

      var arrayOfGifs = res.data;
      var rand = Math.floor(Math.random() * arrayOfGifs.length);
      var firstItem = arrayOfGifs[rand];
      var giphyLink = firstItem.images.fixed_width.url;
      document.querySelector("#gif").setAttribute("src", giphyLink);
    })
    .catch(error => console.log(error));
}

function getTrendingData() {
  var url =
    "https://api.giphy.com/v1/gifs/trending?api_key=wOkuLOpg0lyr0TN1NMtr0qIAsJpFW7rn&q";

  fetch(url)
    .then(data => data.json())
    .then(res => {
      console.log(res);
      var outputHTML = "";
      var tenGifs = document.getElementById("tenGifs");
      if (res.data.length < 10) return;
      for (let i = 0; i < 10; i++) {
        var node = document.createElement("img");
        node.setAttribute("src", res.data[i].images.fixed_width.url);
        tenGifs.appendChild(node);
      }
    });
}
