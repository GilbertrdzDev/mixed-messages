const getRandomNumber = (num) => {
  return Math.floor(Math.random() * num)
}

const phraseCollection = {
  greeting: ['Hello', 'Hi', 'Hey', 'Howdy', 'Greetings'],
  hobby: ['I like', 'I love', 'I\'m interested in', 'I\'ve been interested in', 'I\'ve been known to be interested in'],
  games: [ 'Football', 'Basketball', 'Baseball', 'Tennis', 'Cycling' ]
}

let personalPhrase = [];

for(let prop in phraseCollection) {
  let optionIdx = getRandomNumber( phraseCollection[ prop ].length );
  personalPhrase.push( phraseCollection[ prop ][ optionIdx ] );
}

const formatPhrase = ( phrase ) => {
  const formatted = personalPhrase.join(' ');
  console.log(formatted);
}

formatPhrase( personalPhrase );
