import styles from "./NavBar.module.scss";
import labs from "../../assets/labs";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        {labs.map((lab) => {
          const pathname = `/lab${lab.id}`;
          const isCurrent =
            location.pathname === pathname ||
            (location.pathname === "/" && lab.id === 1);
          return (
            <li
              className={`${styles.navItem} ${
                isCurrent ? styles.active : styles.notActive
              }`}
              key={lab.id}
            >
              <Link className={styles.navLink} to={pathname}>
                {lab.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
