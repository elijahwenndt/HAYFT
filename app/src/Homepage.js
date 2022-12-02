import Navbar from "./Navbar"
export default function HomePage() {
    return (
    <>
    <Navbar />
    <div className='container bg-light rounded mt-3'>
        <div className="row justify-content-center">
            <div className="col-12 text-center p-2">
                <h1>Welcome to HAYFT!</h1>
                <p>Here at HAYFT we have just one question for you...</p>
                <h2>How Are You Feeling Today?</h2>
                <p>HAYFT is a personal mental health journaling site that will allow you to keep track of how you are feeling day to day. At HAYFT, we believe that just getting your thoughts and feelings written down is half the battle. HAYFT will save your personal posts so you can look back on your past entries and be able to reflect on both how and why you were feeling on that particular day. </p>
            </div>
        </div>
    </div> 
    </>
    )
}