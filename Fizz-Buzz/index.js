'use strict';

function fizzBuzz(countTo) {
  
  const result = [];
  
  for (let i = 1; i <= countTo; i++) {
    if (i % 15 === 0) {
      result.push('fizzbuzz');
    } else if (i % 5 === 0) {
      result.push('buzz');
    } else if (i % 3 === 0) {
      result.push('fizz');
    } else {
      result.push(i);
    }
  }
  return result;
}


let pushToHTML = (data) => {
  data.forEach((arrayMember)=> {
    if (arrayMember === 'fizz') {
      $('.js-results').append('<div class="fizz-buzz-item fizz"><span>fizz</span></div>');
    } else if (arrayMember === 'buzz') {
      $('.js-results').append('<div class="fizz-buzz-item buzz"><span>buzz</span></div>');
    } else if (arrayMember === 'fizzbuzz') {
      $('.js-results').append('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>');
    } else {
      $('.js-results').append(`<div class="fizz-buzz-item"><span>${arrayMember}</span></div>`);
    }
  });
};

let listen = () => {
  $('form').on('submit', (event) => {
    event.preventDefault();
    let val=$('input').val();
    let data = fizzBuzz(val);
    pushToHTML(data);
  });
};


listen();