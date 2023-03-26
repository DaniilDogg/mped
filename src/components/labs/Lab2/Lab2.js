import { MathComponent } from "mathjax-react";

import ShowCode from "../components/ShowCode";
import BuildGraph from "./components/BuildGraph";

import styles from "styles/Lab.module.scss";
const labId = 2;

export default function Lab2() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Лабораторна робота №1. Теорія похибок.</h1>
      <p className={styles.task}>
        <b>Задача {labId}.</b>
      </p>
      <div className={styles.text}>
        <p>Знаходження критичних значень нормального розподілу.</p>
        <p>
          Точніше формулювання: при заданому значені{" "}
          <span className={styles.inlineFormula}>
            <MathComponent tex={String.raw`\alpha`} display={false} />
          </span>{" "}
          потрібно розв’язати рівняння{" "}
          <span className={styles.inlineFormula}>
            <MathComponent
              tex={String.raw`1 - 2 \Phi(t) = \alpha`}
              display={false}
            />
          </span>{" "}
          або{" "}
          <span className={styles.inlineFormula}>
            <MathComponent tex={String.raw`2 \Phi(t) = P`} display={false} />
          </span>
          , де{" "}
          <span className={styles.inlineFormula}>
            <MathComponent tex={String.raw`P = 1 - \alpha.`} display={false} />
          </span>{" "}
          Значення{" "}
          <span className={styles.inlineFormula}>
            <MathComponent tex={String.raw`t_{KR} = t(P)`} display={false} />
          </span>{" "}
          , при яких{" "}
          <span className={styles.inlineFormula}>
            <MathComponent
              tex={String.raw`1 - 2 \Phi(t) = \alpha`}
              display={false}
            />
          </span>
          , або{" "}
          <span className={styles.inlineFormula}>
            <MathComponent tex={String.raw`2 \Phi(t) = P`} display={false} />
          </span>{" "}
          називаються критичними значеннями при надійності{" "}
          <span className={styles.inlineFormula}>
            <MathComponent tex={String.raw`P`} display={false} />
          </span>
          . Для забезпечення цього застосувати метод половинного поділу.
        </p>
      </div>
    </div>
  );
}
