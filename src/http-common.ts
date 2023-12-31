import axios from "axios";
import {Md5} from 'ts-md5';

const PUB_KEY: String = process.env.REACT_APP_API_PUB_KEY ?? '';
const PRIV_KEY: String = process.env.REACT_APP_API_PRIV_KEY ?? '';
const timeStamp: String = new Date().getTime().toString();
const hash: String = Md5.hashStr(`${timeStamp}${PRIV_KEY}${PUB_KEY}`);
let params = {
    ts: timeStamp,
    apikey: PUB_KEY,
    hash: hash,
    limit: 12
};

export default axios.create({
  baseURL: `http://gateway.marvel.com/v1/public`,
  params: params,
  headers: {
    "Content-type": "application/json"
  }
});