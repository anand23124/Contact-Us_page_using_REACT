import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation}  container `}>
      <div className="logo">
        <img src="/images/Frame 2 1.png" alt="logo" />
      </div>
      <div className="nav-content">
        <ul>
          <li href="#">Home</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
