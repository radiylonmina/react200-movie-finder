/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const search = 'http://localhost:8888';
const detail = 'http://localhost:8888/#/movie/tt0371746'


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should load successfully', () => axios.get(search).then(r => expect(r.status == 200)));

  it('should have the correct page title', () =>
    nightmare
      .goto(search)
      .evaluate(() => document.getElementById('app').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal("Rad's Movie Finder");
      })
      .done()
  ).timeout(20000);

  it('returns the correct status code', () => axios.get(search)
    .then(response => expect(response.status === 200))
  ).timeout(20000);

  it('should have search input', () => 
    nightmare
      .goto(search)
      .evaluate(() => document.querySelector('body').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('input');
      })
      .done()
  ).timeout(20000);

  it('should have go button', () => 
    nightmare
      .goto(search)
      .evaluate(() => document.querySelector('body').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('button');
      })
      .done()
  ).timeout(20000);

  it('should have Link to return to search container', () => 
    nightmare
      .goto(detail)
      .evaluate(() => document.getElementById('link').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('Return to Search');
    })
      .done()
  ).timeout(20000);

  it('should have movie poster image', () => 
    nightmare
      .goto(detail)
      .evaluate(() => document.querySelector('body').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('img');
      })
      .done()
  ).timeout(20000);

  it('should have correct movie synopsis', () => 
    nightmare
      .goto(detail)
      .evaluate(() => document.getElementById('plot').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('Synopsis');
    })
      .done()
  ).timeout(20000);

  it('should have correct movie rating', () => 
    nightmare
      .goto(detail)
      .evaluate(() => document.getElementById('rated').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('Rated');
    })
      .done()
  ).timeout(20000);
  
  it('should have correct movie release date', () => 
    nightmare
      .goto(detail)
      .evaluate(() => document.getElementById('date').innerHTML)
      .end()
      .then((text) => {
        expect(text).to.contain('Release Date');
      })
      .done()
  ).timeout(20000);

});
