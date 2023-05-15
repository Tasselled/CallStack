import React from 'react';
import '../stylesheets/leetcodeStyles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage } from '../store/userReducer';

export default function LeetCode() {
  const randomNum = Math.floor(Math.random() * 1);
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.userReducer.errorMessage);

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

    <div className='leetcodeProblem'>
      <h1>Write a function that takes a string of text and returns true if</h1>
      <h1>the parentheses are balanced and false otherwise.</h1>
      <h4>Example:</h4>
      <p> balancedParens{"('(')"}; // false</p>
      <p> balancedParens('()'); // true</p>
      <p> balancedParens(')('); // false</p>
      <p> balancedParens('(())'); // true</p>
      <h3>Step 2:</h3>
      <p> make your solution work for all types of brackets</p>
      <h4>Example:</h4>
      <p> balancedParens{"('[](){}')"}; // true</p>
      <p> balancedParens{"('[({})]')"}; // true</p>
      <p> balancedParens{"('[(]{)}')"}; // false</p>
      <h3>Step 3:</h3>
      <p>ignore non-bracket characters</p>
      <h4>Example:</h4>
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
    const test5 = inputString.slice(0, index) + "'const wow = { yo: thisIsAwesome() }'" + inputString.slice(index + 4);
    try {
      if (eval(test1) && !eval(test2) && !eval(test3) && !eval(test4) && eval(test5)) {
        document.querySelector('.answeredLeetCode').style.display = 'block';
        document.querySelector('.leetCodeQuestion').style.display = 'none';
        dispatch(setErrorMessage([]));
      } else {
        dispatch(setErrorMessage(<h1 style={{ color: 'red' }}>You're wrong</h1>));
      }
    } catch {
      dispatch(setErrorMessage(<h1 style={{ color: 'red' }}>You're wrong</h1>));
    }
  }

  return (
    <div className='leetCodeQuestion'>
      {questions[randomNum]}
      {errorMessage}
      <textarea
        id='leetCodeAnswer'
        cols='120'
        rows='30'
        placeholder={
          'Must execute function at the end.\nInput parameter when executing must be "args".\n "args" must not be used anywhere else.\nEx:\nfunction myFunction(input) {console.log(input)}\nmyfunction(args)'
        }
      />
      <br />
      <button
        onClick={() => {
          evaluate(document.querySelector('#leetCodeAnswer').value);
        }}>
        Submit
      </button>
    </div>
  );
}
