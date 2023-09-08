import { useEffect, useState } from "react";

export default function Comment() {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  return (
    <div>
      <h3> Totall Comment : {comment.length}</h3>
    </div>
  );
}
