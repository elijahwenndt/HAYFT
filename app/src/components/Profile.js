import React from "react";
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import { useState, useEffect, useRef } from "react";
import Picker from "emoji-picker-react";
import { format } from "date-fns";
import parseJSON from "date-fns/parseJSON";
import toast, { Toaster } from "react-hot-toast";
// import isValid from "date-fns/isValid";
// import parseISO from "date-fns/parseISO";

const Profile = () => {
  const [state, dispatch] = useGlobalState();
  const [postData, setPostData] = useState([]);
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [textContent, setTextContent] = useState("");
  // const [input, setInput] = useState("")
  const textboxRef = useRef(null);
  
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
    try {
      let resp = await request(options);
      setPostData([resp.data, ...postData]);
      toast.success("Post successful!");
    } catch (error) {
      toast.error(
        "Please make sure you have selected an emoji and filled in the textbox!"
      );
    }
    // toast.success("Post successful!");
    // toast.error('This is an error!');
  }

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
    setPostData(postData.filter((p) => p.id !== post.id));
    toast.success("Post Deleted!");
  }

  return (
    <div className="container">
      <div className="row justify-content-center mb-2">
        {/* <h1>{state.currentUser.user_id}</h1> */}
        <div className="d-flex col-12 text-center justify-content-center">
          <Picker onEmojiClick={onEmojiClick} />
        </div>
        <div className="col-7 text-center fs-2">
          {" "}
          {chosenEmoji ? (
            <div>You chose: {chosenEmoji.emoji}</div>
          ) : (
            <div>Please Choose an Emoji</div>
          )}
        </div>
        <textarea
        rows="6"
          className="col-10"
          id="textfield1"
          ref={textboxRef}
          placeholder="How Are You Feeling Today?"
          onChange={(e) => setTextContent(e.target.value)}
        />
        <div className="text-center my-3">
          <button
            className="btn btn-primary"
            onClick={() => {
              sendData();
              setTextContent("");
              textboxRef.current.value = "";
            }}
          >
            Post How You Are Feeling!
          </button>
        </div>
      </div>
      <div className="row g-4">
        {postData.map((post) => (
          <div
          key={post.id}
          className="col-md-6 col-sm-12 d-flex align-items-stretch"
          >
          <div className="card w-100 bg-light rounded shadow">
            <div className="card-body text-center d-flex flex-column justify-content-center">
              <div className="card-title fs-1">{post.emoji}</div>
              <div className="card-text fw-bold fs-3">
                {getTimestamp(post.created_at)}
              </div>
              <div className="card-text mt-auto mx-auto mb-3">
                {post.text_content}
              </div>
          
              <div
                className="btn mt-auto btn-outline-danger mx-auto w-25"
                onClick={() => handleDelete(post)}
              >
                delete post
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
      <Toaster />
    </div>
  );
};

export default Profile;

// (e) => {setEmoji(e.target.value)}
// (i) => handleClick(i)
// onClick={handleDelete(post)}
{/* <div
key={post.id}
className="col-md-6 col-sm-12 d-flex align-items-stretch"
>
<div className="card w-100 bg-light rounded shadow">
  <div className="card-body text-center d-flex flex-column justify-content-center">
    <div className="card-title fs-1">{post.emoji}</div>
    <div className="card-text fw-bold fs-3">
      {getTimestamp(post.created_at)}
    </div>
    <div className="card-text mt-auto mx-auto mb-3">
      {post.text_content}
    </div>

    <div
      className="btn mt-auto btn-outline-danger mx-auto w-25"
      onClick={() => handleDelete(post)}
    >
      delete post
    </div>
  </div>
</div>
</div> */}