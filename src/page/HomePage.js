import React from 'react'
import "./homePage.css"

const HomePage = (props) => {
    return (
        <div className="main-container">
            <div className="main-wrapper">
                <button className="start-btn" onClick={()=>props.history.push("/quiz")}>Start</button>
            </div>
        </div>
    )
}

export default HomePage
