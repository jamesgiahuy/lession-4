import "./product.css";

const Main = (props) => {
  const { avatar, bitmap, desc, date } = props.data;
  return (
    <div className="item">
      <img src={avatar} alt=""></img>
      <span>{bitmap}</span>
      <p>{desc}</p>
      <span>{date}</span>
    </div>
  );
};

export default Main;
