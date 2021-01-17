import React from 'react';

const SloM = (props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '😄😁';
    let {x,y,z} = props;

    if ((x === y) && (y === z)) {
        return (<>

            <hr />
            <div className="slot_inner">
                <h1>{x}{y}{z}</h1>
                <h1>IT'S MATCHED</h1>
            </div>
            <hr />


        </>);
    } else {
        return (<>
            <hr />
            <div className="slot_inner">
                <h1>{x}{y}{z}</h1>
                <h1>IT'S NOT MATCHED</h1>
                <hr />
            </div>
        </>);
    }
}

const App = () => {
    return (<>
        <h1 className="headingStyle">
            🎰 Welcome to <span style={{ fontWeight: "bold" }}>Slot Machine Game</span>🎰
        </h1>
        <SloM x = '😄' y = '😄'  z = '😄'/>
        <SloM x = '😄' y = '🤣'  z = '😄'/>
        <SloM x = '😄' y = '😄'  z = '😄'/>
    </>);
}

export default App;

