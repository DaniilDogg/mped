import styles from "./Lab1.module.scss";
import Solution from "./Solution";

export default function Lab1() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Лабораторна робота 1. Теорія похибок.</h1>
      <p className={styles.task}>
        <b>Задача 1.</b>
      </p>
      <div className={styles.text}>
        <p>
          Табулювання функції Erf(t) та використання для цього чисельного
          інтегрування.
        </p>
        <p>
          Точніше формулювання: для заданого t знайти значення найбільш
          ефективним спосбом. В якості методу чисельного інтегрування вибрати
          метод Симпсона з автоматичним вибором кроку інтегрування. Побудувати
          графік функцій для функції Erf(t) нормального розподілу.
        </p>
      </div>

      <button className={styles.loadBtn}>Завантажити данні</button>

      <p className={styles.text}>
        <b>Програмний код:</b>
      </p>
      <div className={styles.solution}>
        <Solution />
      </div>
    </div>
  );
}
