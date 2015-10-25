var encrypt = require('../index.html')
var expect = require('chai').expect

describe('Encryptor html page', function(){
  var message = document.getElementById('message');
  var button = document.getElementById('encrypt');

  it('should encrypt a message to the text field', function(){
    message = ('this is the test test test string')
    expect(message).to.equal('this is the test test test string')
    click
  });
})
