import { ThemeSwitcher } from "components/ThemeSwitcher";

import styles from "./TheHeader.module.scss";

export const TheHeader = () => (
  <div className={styles.header}>
    <h3 className={styles.logo}>GitHub Users Finder</h3>
    <ThemeSwitcher />
  </div>
);
