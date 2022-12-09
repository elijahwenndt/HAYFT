import { useGlobalState } from "../context/GlobalState";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
    let navigate = useNavigate();
    const [state] = useGlobalState();
    function navigationstuff() {
        if (!state.currentUser) {
            navigate("/login")
        }
        else {
            navigate("/profile")
        }
    }

    return (
    <>
    {/* <Navbar handleClick={props.handleClick}/> */}
    <div className='container '>
        <div className="row justify-content-center">
            <div className="col-10 bg-light rounded shadow text-center p-3 my-3">
                <h1>Welcome to HAYFT!</h1>
                <p>Here at HAYFT we have just one question for you...</p>
            </div>
            <div className="col-10 bg-light rounded shadow text-center p-3 my-3">
                <h2>How Are You Feeling Today?</h2>
                <p>HAYFT is a personal mental health journaling site that will allow you to keep track of how you are feeling day to day. At HAYFT, we believe that just getting your thoughts and feelings written down is half the battle. HAYFT will save your personal posts so you can look back on your past entries and be able to reflect on both how and why you were feeling on that particular day. HAYFT allows you to simply get your feelings out there. We believe this is the first step to bettering your mental health.</p>
            </div>
            <div className="col-10 bg-light rounded shadow text-center p-3 my-3">
                <h3>So, how does it work?</h3>
                <p>It's easy! First, you select an emoji to express how you feeling, Then you make a text post below, explaining why you felt that way. After you make your selection you submit your post. Your post will then be saved and displayed below. Using HAYFT, you can make many posts throughout the day to track how you are feeling. This allows you to take a collective consideration of your feelings throughout the day and have the ability to reflect on those feelings. Hopefully you can utilize HAYFT to journal about your day, as well as expressing how the activities and events that occurred over the day made you feel. </p>
                <h5>So...</h5>
                <button className="btn btn-primary" onClick={()=> navigationstuff()}>How Are You Feeling Today?</button>
            </div>
            </div>
            {/* <footer className="bg-primary text-center text-light p-3">placeholder</footer> */}
    </div>
    {/* <div className="d-flex flex-column min-vh-25"> */}
    {/* <footer className="bg-primary text-center text-light fixed-bottom p-3">placeholder</footer> */}
    {/* </div> */}
    </>
    )
}