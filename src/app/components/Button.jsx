import styles from "./Button.module.css";

const Button = ({ text, type = "primary", widthType = "short" }) => {
  const buttonClass = type === "primary" ? styles.primary : styles.secondary;
  return (
    <button className={`${styles.button} ${styles[widthType]} ${buttonClass}`}>
      {text}
    </button>
  );
};

export default Button;
