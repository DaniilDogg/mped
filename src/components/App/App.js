import NavBar from "../NavBar";
import { Routes, Route } from "react-router-dom";
import { Lab1, Lab2 } from "../labs";
import styles from "./App.module.scss";
export default function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <Routes>
          <Route index element={<Lab1 />} />
          <Route path="lab1" element={<Lab1 />} />
          <Route path="lab2" element={<Lab2 />} />
        </Routes>
      </div>
    </div>
  );
}
