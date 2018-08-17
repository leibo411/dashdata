

// identify a sale from the machine
// get the price of dash in terms of bitcoin
// return the sale of dash in terms of satoshis
// Input data into spreadsheet
const got = require('got');

async function getthepriceofdashinbitcoin (){
  try {
    const response = await got('https://api.coinmarketcap.com/v2/ticker/?convert=BTC');

    var cmkData = JSON.parse(response.body)
    var dashprice = cmkData["data"]["131"]["quotes"]["BTC"]["price"]
  return dashprice
    //=> '<!doctype html> ...'
  } catch (error) {
    console.log(error.response.body);
    //=> 'Internal server error ...'

  }
}

function dashintosatoshis (amountofdash,btcperdash){
  q=amountofdash*btcperdash
  return q
}

async function run (){
var btcperdash = await getthepriceofdashinbitcoin();
var dashinsats = dashintosatoshis(9,btcperdash)
console.log(dashinsats)
}
run()
