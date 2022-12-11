import React from "react";
import { useGlobalState } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function YourJourney() {
  const [state] = useGlobalState();
  const [dateFilter, setDateFilter] = useState(undefined);
    console.log(state.postData)
  let DateFilter = state.postData.filter(
    (date) => date.date_reference === dateFilter
  );
if (dateFilter!==undefined){
  return (
    <>
    <input type="text" placeholder="YYYY-MM-DD" onChange={(e) => setDateFilter(e.target.value)}/>
    <div className="container">
      <div className="row g-3">
        {DateFilter.map((post) => (
          <div
            key={post.id}
            className="col-12 d-flex align-items-stretch"
          >
            <div className="card w-100 bg-light rounded shadow">
              <div className="card-body text-center ">
                <div className="card-title fs-1">{post.emoji}</div>
                <div className="card-text fw-bold fs-3">
                  {post.date_reference}
                </div>
                <div className="card-text">
                  {post.text_content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
if (dateFilter == undefined) {
  return (
    <>
    <input type="text" placeholder="YYYY-MM-DD" onChange={(e) => setDateFilter(e.target.value)}/>
    <div className="container">
      <div className="row g-3">
        {state.postData.map((post) => (
          <div
            key={post.id}
            className="col-12 d-flex align-items-stretch"
          >
            <div className="card w-100 bg-light rounded shadow">
              <div className="card-body text-center ">
                <div className="card-title fs-1">{post.emoji}</div>
                <div className="card-text fw-bold fs-3">
                  {post.date_reference}
                </div>
                <div className="card-text">
                  {post.text_content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

}
