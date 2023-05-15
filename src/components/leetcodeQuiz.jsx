import React from 'react';

export default function LeetCode() {
  const randomNum = Math.floor(Math.random() * 1);

  const questions = [
    // <div>
    //   <p>Consider an array called apple-stock as an argument. This array</p>
    //   <p>represents the variation of an Apple stock during a single day. </p>
    //   <p>The values in the array are in chronological order.</p>
    //   <p>ex: [1000, 500, 1500, 2000, 0] -- The stock began at 1000 and closed at 0;</p>
    //   <p>Write a function called highestProfit that calculates the highest profit </p>
    //   <p>you can make in the given day by buying and selling a single Apple stock. </p>
    //   <p>This is comprised of one buy and one sell. Keep your worst case </p>
    //   <p>time complexity in O(n^2).</p>
    //   <p>Return 0 if no profit is possible OR if input is invalid.</p>
    // </div>,

    <div>
      <p>write a function that takes a string of text and returns true if</p>
      <p>the parentheses are balanced and false otherwise.</p>
      <p>Example:</p>
      <p> balancedParens{"('(')"}; // false</p>
      <p> balancedParens('()'); // true</p>
      <p> balancedParens(')('); // false</p>
      <p> balancedParens('(())'); // true</p>
      <p>Step 2:</p>
      <p> make your solution work for all types of brackets</p>
      <p>Example:</p>
      <p> balancedParens{"('[](){}')"}; // true</p>
      <p> balancedParens{"('[({})]')"}; // true</p>
      <p> balancedParens{"('[(]{)}')"}; // false</p>
      <p>Step 3:</p>
      <p>ignore non-bracket characters</p>
      <p>balancedParens{"(' const wow = { yo: thisIsAwesome() }'); // true"}</p>
      <p>balancedParens{"(' const newton = () => { telescopes.areSicc(); '); // false"}</p>
    </div>,
  ];

  function evaluate(inputString) {
    const index = inputString.indexOf('args');
    const test1 = inputString.slice(0, index) + "'[](){}'" + inputString.slice(index + 4);
    const test2 = inputString.slice(0, index) + "'[(]{)}'" + inputString.slice(index + 4);
    const test3 = inputString.slice(0, index) + "')('" + inputString.slice(index + 4);
    const test4 = inputString.slice(0, index) + "'('" + inputString.slice(index + 4);
   
    if (eval(test1) && !eval(test2) && !eval(test3) && !eval(test4)) {
      document.querySelector('.answeredLeetCode').style.display = 'block'
      document.querySelector('.leetCodeQuestion').style.display = 'none'
    }
  }

  return (
    <div className='leetCodeQuestion'>
      {questions[randomNum]}
      <textarea
        id='leetCodeAnswer'
        cols='120'
        rows='30'
        placeholder={
          'Must execute function at the end.\nInput parameter when executing must be "args".\n "args" must not be used anywhere else.\nEx:\nfunction myFunction(input) {console.log(input)}\nmyfunction(args)'
        }
      />
      <button
        onClick={() => {
          evaluate(document.querySelector('#leetCodeAnswer').value);
        }}>
        Submit
      </button>
    </div>
  );
}
