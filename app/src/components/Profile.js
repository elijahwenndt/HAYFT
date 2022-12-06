import React from "react";
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import { useState, useEffect, useRef } from "react";
import Picker from "emoji-picker-react";
import { Emoji, EmojiStyle } from "emoji-picker-react";

const Profile = () => {
  const [state, dispatch] = useGlobalState();
  const [postData, setPostData] = useState([]);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [textContent, setTextContent] = useState("");
  // const [input, setInput] = useState("")

  const emojiRef = useRef(null);
  // const textRef = useRef(null);
  const onEmojiClick = (emojiObject, event) => {
    console.log(event);
    setChosenEmoji(emojiObject);
  };

  console.log({ chosenEmoji });
  useEffect(() => {
    async function getData() {
      let options = {
        url: "posts/",
        method: "GET",
        params: {
          author__id: state.currentUser.user_id,
        },
      };
      let resp = await request(options);
      setPostData(resp.data);
    }
    getData();
  }, []);

  async function sendData() {
    let options = {
      url: "posts/",
      method: "POST",
      data: {
        emoji: chosenEmoji.emoji,
        text_content: textContent,
        author: state.currentUser.user_id,
      },
    };
    let resp = await request(options);
    setPostData([
      ...postData,
      resp.data
    ])
  }

  return (
    <div>
      <h1>{state.currentUser.user_id}</h1>
      <div>
        {/* {chosenEmoji ? (
        <span>You chose: {chosenEmoji.unified}</span>
      ) : (
        <span>No emoji Chosen</span>
      )} */}
        <Picker onEmojiClick={onEmojiClick} />
      </div>
      <div style={{ minHeight: "25px" }}>{chosenEmoji?.emoji}</div>
      <textarea
        className="col-8"
        placeholder="How Are You Feeling Today?"
        onChange={(e) => setTextContent(e.target.value)}
      />
      <div>
        <button className="btn btn-primary" onClick={sendData}>
          make your daily post!
        </button>
      </div>
      {postData.map((post) => (
        <div key={post.id} className="row" >
          <div className="col-3">{post.emoji}</div>
          <div className="col-6">{post.text_content}</div>
          <div className="col-3">{post.created_at}</div>
        </div>
      ))}
    </div>
  );
};

export default Profile;

// (e) => {setEmoji(e.target.value)}
// (i) => handleClick(i)
