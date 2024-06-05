import styles from "./Button.module.css";

const Button = (props) => {
  const { isOutline, icons, text, ...rest } = props;
  return (
    <button
      {...rest}
      className={props.isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
