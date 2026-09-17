import { useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map((post) => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "harkirat",
        subtitle: "10000 followere",
        time: "2m ago",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5KU4VBx2aIvtVgLp5NfjoWU3Xj3phhaRQmI7pPQrhA&s=10",
        description:
          "What to know how to win big? Check out how these folks won $6000 inbounties.",
      },
    ]);
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>{postComponents}</div>
      </div>
    </div>
  );
}

export default App;
