import style from "./Button.module.css";

const Buttons = ({HandleonClick}) => {


 
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={style.buttoncontainer}>
      {buttonName.map((button, index) => (
        <button key={index} className={style.button} onClick={()=> HandleonClick (button)}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default Buttons;

