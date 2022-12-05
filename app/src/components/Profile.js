import React from "react"
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import { useState, useEffect } from "react";

const Profile = () => {
  const [ state, dispatch ] = useGlobalState();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    async function getData() {
      let options = {
        url: "posts/",
        method: "GET",
        params: {
          'author__id': state.currentUser.user_id
        }

      };
      let resp = await request(options)
      await dispatch ({
        postData: resp.data
      });
      setPostData(resp.data);
      
    }
    getData();
  }, []);
  console.log(postData)
  return (
    <div>
      <h1>{state.currentUser.user_id}</h1>

    </div>
  )
}

export default Profile