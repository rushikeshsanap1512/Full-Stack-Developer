const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
};

export function PostComponent({ name, subtitle, time, image, description }) {
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
