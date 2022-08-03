import {
  FINNHUB,
} from '../constants'

import {
  requestStock,
  receiveStock
} from './types';

const finUrl = FINNHUB.baseUrl;
const candleEndpoint = FINNHUB.candleEndpoint;
const profileEndpoint = FINNHUB.profileEndpoint;
const finToken = FINNHUB.token;

function getFinHubUrl(
  endpoint=candleEndpoint,
  symbol="TWTR",
  count=5000,
  resolution="D")
{
  var url = finUrl + endpoint;
  if (endpoint === candleEndpoint) {
    url += "symbol=" + symbol + "&resolution=" + resolution +  "&count=" + count;
  } else if (endpoint === profileEndpoint) {
    url += "symbol=" + symbol;
  }
  url += "&token=" + finToken;
  return (url);
}


export function fetchStock(symbol) {
  return function(dispatch) {
    dispatch(requestStock(symbol));
    var url = getFinHubUrl(candleEndpoint, symbol);
    console.log(url);
    return fetch(url)
      .then(
        response => response.json(),
        error => console.log("ERROR: ", error)
      )
      .then(data => dispatch(receiveStock(symbol, data)));
  }
}