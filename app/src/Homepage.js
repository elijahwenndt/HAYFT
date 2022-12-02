import Navbar from "./Navbar"
export default function HomePage() {
    return (
    <>
    <Navbar />
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
                <p>It's easy! First, you select an emoji to express how you feeling, Then you make a text post below, explaining why you felt that way. After you make your selection you submit your post. Your post will then be saved and displayed below. Using HAYFT, you can only make one post per day. This allows you to take a collective consideration of your whole day before posting. Hopefully you can utilize HAYFT to journal about your day, as well as expressing how the activities and events that occurred over the day made you feel. </p>
                <p>So...</p>
                <button className="btn btn-primary">How Are You Feeling Today?</button>
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