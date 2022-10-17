import React, { useState } from "react";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import LikePost from "./components/LikePost";
import PostList from "./components/PostList";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [editedPost, setEditedPost] = useState("");

  function addPost(postObj) {
    let postArr = [...posts];
    postArr.push(postObj);
    setPosts(postArr);
  }

  function deletePost(id) {
    let deleteArr = [...posts];
    deleteArr = deleteArr.filter(item => {
      if (id !== item.id) {
        return true;
      }
    });

    setPosts(deleteArr);
  }

  function getEditedPost(id) {
    let newPost = posts.find(item => item.id === id);
    setEditedPost(newPost);
  }

  function saveChanges(newObj) {
    let newPosts = [...posts];
    newPosts = newPosts.map(item => {
      if (item.id === newObj.id) {
        return newObj;
      }
      return item;
    });

    setPosts(newPosts);
    setEditedPost("");
  }

  return (
    <div>
      <CreatePost addPost={addPost} />
      <PostList
        posts={posts}
        deletePost={deletePost}
        getEditedPost={getEditedPost}
      />
      {editedPost ? (
        <EditPost editedPost={editedPost} saveChanges={saveChanges} />
      ) : (
        <h5>Not editing post now!</h5>
      )}

      {/* <LikePost /> */}
    </div>
  );
};

export default App;
