import React, { useState } from "react";
const EditPost = ({ editedPost, saveChanges }) => {
  const [editedObj, setEditedObj] = useState(editedPost);
  function editBody(e) {
    setEditedObj({
      ...editedObj,
      body: e.target.value,
    });
  }
  return (
    <div>
      <h2>Edit post component</h2>
      <input type="text" value={editedObj.body} onChange={editBody} />
      <button onClick={() => saveChanges(editedObj)}>SAVE</button>
    </div>
  );
};

export default EditPost;
