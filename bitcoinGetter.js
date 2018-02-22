const API = 'https://api.coindesk.com/v1/bpi/currentprice.json'
const PRICE = document.querySelector('#price')

// XHR

const btnXHR = document.querySelector('#btnXHR')

btnXHR.addEventListener('click', function() {
    let XHR = new XMLHttpRequest()
    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
            PRICE.textContent = JSON.parse(XHR.responseText).bpi.USD.rate + ' USD'
        }
    }
    XHR.open('GET', API)
    XHR.send()
})

// Fetch

const btnFetch = document.querySelector('#btnFetch')

btnFetch.addEventListener('click', function() {
    fetch(API)
        .then(function(res) {
            res.json()
                .then(function(data) {
                    PRICE.textContent = data.bpi.USD.rate + ' USD'
                })
        })
        .catch(function(err) {
            console.log(err)
        })
})

// jQuery

$('#btnJquery').click(function() {
    $.getJSON(API)
        .done(function(data) {
            $('#price').text(data.bpi.USD.rate + ' USD')
        })
        .fail(function(err) {
            console.log(err)
        })
})

// Axios

const btnAxios = document.querySelector('#btnAxios')

btnAxios.addEventListener('click', function() {
    axios.get(API)
        .then(function(res) {
            PRICE.textContent = res.data.bpi.USD.rate + ' USD'
        })
        .catch(function(err) {
            console.log(err)
        })
})
