import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function commentInput() {
    return (
        <div>
        {/* <input></input>      input will be a text field for someone to write their comment */}
        {/* <button type="submit"></button>    button will function as a submit to send the comment to the server so it updates on the page */}
        </div>
       )
}

export default commentInput;