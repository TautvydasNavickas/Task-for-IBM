import {
  SEARCH_STOCK,
  REQUEST_STOCK,
  RECEIVE_STOCK,
  ADD_STOCK
} from '../constants';

export function searchStock(symbol) {
  console.log('Searching for stock: ', symbol);
  return {
    type: SEARCH_STOCK,
    symbol
  }
}

export function requestStock(symbol) {
  return {
    type: REQUEST_STOCK,
    symbol
  }
}

export function receiveStock(symbol, data) {
  return {
    type: RECEIVE_STOCK,
    symbol,
    data: data
  }
}


export function addStock(symbol) {
  return {
    type: ADD_STOCK,
    symbol: symbol
  }
}