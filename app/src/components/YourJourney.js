import React from "react";
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function YourJourney() {
  const [state] = useGlobalState();
  const [ localCheck ] = useState(() => {
    return JSON.parse(localStorage.getItem("data"))
  });
  // console.log("postData: " + state.postData)
  const [dateFilterState, setDateFilter] = useState(undefined);
  // let navigate = useNavigate();
  // if (!state.postData) {
  //   console.log('hello')
  //   navigate('/profile')
  // }
  // console.log(state.postData);
  // let obj = [...localCheck]
  // console.log("local: " + localCheck)
  // else {
  let dateFilter = localCheck.filter(
    (date) => date.date_reference === dateFilterState
  );
  
  if (dateFilterState !== undefined ) {
    return (
      <>
        <div className="container">
        <div className="row text-center justify-content-center my-3">
          <div className="col-md-10 col-sm-12">
            <div className="card w-100 bg-light rounded shadow">
            <div className="card-body text-center ">
            <div className="card-title fw-bold fs-1">This is Your Journey</div>
            <div className="card-text">Use this page to filter your posts by date so you can reflect on your past feelings. Type the date you wish to see into the textbox formatted as YYYY-MM-DD.</div>
        <input
        className="rounded my-2"
          type="text"
          placeholder="YYYY-MM-DD"
          onChange={(e) => setDateFilter(e.target.value)}
        />
        </div>
        </div>
        </div>
        </div>
          <div className="row g-3 justify-content-center">
            {dateFilter.map((post) => (
              <div key={post.id} className="col-md-10 col-sm-12 d-flex align-items-stretch">
                <div className="card w-100 bg-light rounded shadow">
                  <div className="card-body text-center ">
                    <div className="card-title fs-1">{post.emoji}</div>
                    <div className="card-text fw-bold fs-3">
                      {post.date_reference}
                    </div>
                    <div className="card-text">{post.text_content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <div className="container">
        <div className="row text-center justify-content-center my-3">
          <div className="col-md-10 col-sm-12">
            <div className="card w-100 bg-light rounded shadow">
            <div className="card-body text-center ">
            <div className="card-title fw-bold fs-1">This is Your Journey</div>
            <div className="card-text">Use this page to filter your posts by date so you can reflect on your past feelings. Type the date you wish to see into the textbox formatted as YYYY-MM-DD.</div>
        <input
        className="rounded my-2"
          type="text"
          placeholder="YYYY-MM-DD"
          onChange={(e) => setDateFilter(e.target.value)}
        />
        </div>
        </div>
        </div>
        </div>
          <div className="row g-3 justify-content-center">
            {localCheck.map((post) => (
              <div key={post.id} className="col-md-10 col-sm-12 d-flex align-items-stretch">
                <div className="card w-100 bg-light rounded shadow">
                  <div className="card-body text-center ">
                    <div className="card-title fs-1">{post.emoji}</div>
                    <div className="card-text fw-bold fs-3">
                      {post.date_reference}
                    </div>
                    <div className="card-text">{post.text_content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
// }
  // if (!state.postData) {
  //   return (
  //     <div>return to profile</div>
  //   )
  // }
}
