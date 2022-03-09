import express from 'express';
import { GenericListElement, DetailedListElement } from './list';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/list1', (req, res) => {
  res.send(get_generic_list());
});

app.get('/list2', (req, res) => {
  res.send(get_detailed_list());
});

app.listen(port, () => {
  console.log(`MotherShip listening at http://localhost:${ port }`);
  get_random_list();
});

function get_generic_list(): Array<GenericListElement> {
  return [];
}

function get_detailed_list(): Array<DetailedListElement> {
  return [];
}

function get_random_list<T>(): Array<T> {
//  T can be either GenericListElement or DetailedListElement
  return [];
}