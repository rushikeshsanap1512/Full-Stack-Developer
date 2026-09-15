
// Basic react starting code, Conditional rendering, Props :
function App() {
  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <PostComponent
              name={"harkirat"}
              subtitle={"20 followers"}
              time={"2m ago"}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5KU4VBx2aIvtVgLp5NfjoWU3Xj3phhaRQmI7pPQrhA&s=10"
              }
              description={
                "What to know how to win big? Check out how these folks won $6000 inbounties."
              }
            />
            <br />
          </div>
          <div>
            <PostComponent
              name={"raman"}
              subtitle={"Promoted"}
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5KU4VBx2aIvtVgLp5NfjoWU3Xj3phhaRQmI7pPQrhA&s=10"
              }
              description={
                "How to get hired in 2024? I lost my job in 2023, this is the roadmap I followed to get a job"
              }
            />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20
};

function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={image}
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
        />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time !== undefined && (
            <div style={{ display: "flex" }}>
              <div>{time}</div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTe4TCC8NOZIt3cFFIDnm0cvoHOlWTlgWvLWZVRg8FXg&s=10"
                style={{ width: 10, height: 10, marginLeft: 5 }}
              />
            </div>
          )}
        </div>
      </div>
      <div style={{ fontSize: 12 }}>{description}</div>
    </div>
  );
}

export default App;
