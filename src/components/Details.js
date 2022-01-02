function Details({ image, name, desc }) {
  return (
    <>
      <img src={image} width="150" height="200" />
      <p> {name || "no name"} </p>
      <p> {desc || "no description"} </p>
    </>
  );
}
export default Details;
