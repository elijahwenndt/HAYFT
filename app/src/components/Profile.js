import React from "react"
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import { useState, useEffect } from "react";

const Profile = () => {
  const [ state, dispatch ] = useGlobalState();
  const [postData, setPostData] = useState([]);
  const [emoji, setEmoji] = useState('');
  const [textContent, setTextContent] = useState('');

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

  async function sendData() {
    let options = {
      url: "posts/",
      method: "POST",
      data: {
        emoji: emoji,
        text_content: textContent,
        author: state.currentUser.user_id
      },

    };
    let resp = await request(options);
  }

  console.log(postData)
  return (
    <div>
      <h1>{state.currentUser.user_id}</h1>

    </div>
  )
}

export default Profile