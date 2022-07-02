import "./product.css";

const Group2 = (props) => {
  const { imgUrl, name, description, intro, text } = props.data;

  return (
    <div>
      <button>About the author</button>
      <img src={imgUrl} alt=""></img>
      <span>{name}</span>
      <span>{description}</span>
      <p>{intro}</p>
      <p>{text}</p>
    </div>
  );
};

export default Group2;
