import { MathComponent } from "mathjax-react";

import ShowCode from "../../labs/components/ShowCode";
import BuildGraph from "./components/BuildGraph";

import styles from "styles/Lab.module.scss";
const labId = 1;

export default function Lab1() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Лабораторна робота №1. Теорія похибок.</h1>
      <p className={styles.task}>
        <b>Задача 1.</b>
      </p>
      <div className={styles.text}>
        <p>
          Табулювання функції <b>Erf(t)</b> та використання для цього чисельного
          інтегрування.
        </p>
        <p>
          Точніше формулювання: для заданого <b>t</b> знайти значення функції
          найбільш ефективним способом:
        </p>
        <div className={styles.formula}>
          <MathComponent
            tex={String.raw`F(t) = 1 / \sqrt{2\pi} \int_0^t e^{-x^2/2}\ dx`}
            display={false}
          />
        </div>
        <p>
          В якості методу чисельного інтегрування вибрати метод Симпсона з
          автоматичним вибором кроку інтегрування. Побудувати графік функцій для
          функції <b>Erf(t)</b> нормального розподілу.
        </p>
      </div>
      <BuildGraph />
      <ShowCode id={labId} />
    </div>
  );
}