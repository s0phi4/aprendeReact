//Conditionals

var React = require('react');
var ReactDOM = require('react-dom');

if (user.age >= drinkingAge) {
  var message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  var message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message,
  document.getElementById('app')
);

//Setting up a function to randomly select heads or tails. Function is then used within if statement

function coinToss () {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

var pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

// if/else statement begins here:
if (coinToss()==='heads') {
  var img = <img src={pics.kitty}/>
} else {
  var img= <img src ={pics.doggy}/>;
}

ReactDOM.render(img, document.getElementById('app'));
