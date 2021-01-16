import React from 'react';

function Var() {
    let currDate = new Date(2021, 1, 17, 1);
    currDate = currDate.getHours();
    let greeting = "";
    const cssStyle = {};

    if (currDate >= 1 && currDate < 12) {
        greeting = "good morning";
        cssStyle.color = "green";
    } else if (currDate > 12 && currDate < 20) {
        greeting = "good afternoon";
        cssStyle.color = "orange";
    } else {
        greeting = "good night";
        cssStyle.color = "red";
    }

    return <h1>Hello , <span style={cssStyle}>{greeting}</span></h1>;
}

export default Var;