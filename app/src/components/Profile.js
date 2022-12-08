import React from "react";
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import { useState, useEffect, useRef } from "react";
import Picker from "emoji-picker-react";
import { format } from "date-fns";
import parseJSON from "date-fns/parseJSON";
// import isValid from "date-fns/isValid";
// import parseISO from "date-fns/parseISO";

const Profile = () => {
  const [state, dispatch] = useGlobalState();
  const [postData, setPostData] = useState([]);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [textContent, setTextContent] = useState("");
  // const [input, setInput] = useState("")
  const textboxRef = useRef(null)
  const onEmojiClick = (emojiObject, event) => {
    // console.log(event);
    setChosenEmoji(emojiObject);
  };

  // console.log({ chosenEmoji });
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
    setPostData([resp.data, ...postData]);
  }
  //
  function getTimestamp(displayDate) {
    const date = parseJSON(displayDate);
    const dateFormatted = format(date, "MM/dd/yyyy hh:mm:ss a");
    return dateFormatted;
  }

  async function handleDelete(post) {
    let options = {
      url: `posts/${post.id}`,
      method: "DELETE",
    };
    let resp = await request(options);
    setPostData(postData.filter(p => p.id !== post.id))
  }

  return (
    <div>
      <h1>{state.currentUser.user_id}</h1>
      <div>
        <Picker onEmojiClick={onEmojiClick} />
      </div>
      <div style={{ minHeight: "25px" }}>{chosenEmoji?.emoji}</div>
      <textarea
        className="col-8"
        id="textfield1"
        ref={textboxRef}
        placeholder="How Are You Feeling Today?"
        onChange={(e) => setTextContent(e.target.value)}
      />
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            sendData();
            setTextContent("");
            textboxRef.current.value=""
          }}
        >
          make your daily post!
        </button>
      </div>
      {postData.map((post, i) => (
        <div key={post.id} className="row">
          <div className="col-3">{post.emoji}</div>
          <div className="col-3">{post.text_content}</div>
          <div className="col-3">{getTimestamp(post.created_at)}</div>
          <div className="col-3 btn btn-primary" onClick={() => handleDelete(post)}>
            delete post
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;

// (e) => {setEmoji(e.target.value)}
// (i) => handleClick(i)
// onClick={handleDelete(post)}