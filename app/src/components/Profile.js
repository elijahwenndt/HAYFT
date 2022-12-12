import React from "react";
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import { useState, useEffect, useRef } from "react";
import Picker from "emoji-picker-react";
import { format } from "date-fns";
import parseJSON from "date-fns/parseJSON";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const [state, dispatch] = useGlobalState();
  const [postData, setPostData] = useState([]);
  const [chosenEmoji, setChosenEmoji] = useState("");
  const [textContent, setTextContent] = useState("");

  const textboxRef = useRef(null);

  const onEmojiClick = (emojiObject, event) => {
    setChosenEmoji(emojiObject);
  };

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
      await dispatch({
        postData: resp.data,
      });
      setPostData(resp.data);
    }
    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(postData));
    dispatch({
      postData: postData,
    });
  }, [postData]);

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
        <div className="d-flex col-12 text-center justify-content-center">
          <Picker onEmojiClick={onEmojiClick} />
        </div>
        <div className="col-7 text-center my-2 fs-2">
          {" "}
          {chosenEmoji ? (
            <div>You chose: {chosenEmoji.emoji}</div>
          ) : (
            <div>Please Choose an Emoji</div>
          )}
        </div>
        <textarea
          rows="6"
          className="col-10 rounded border border-0"
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
      <div className="row g-4 mb-3 justify-content-center">
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
                  className="btn mt-auto btn-outline-danger mx-auto w-50"
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
{
  /* <div
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
</div> */
}
