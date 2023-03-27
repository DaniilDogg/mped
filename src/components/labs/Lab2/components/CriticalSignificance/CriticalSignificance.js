import { useRef, useState } from "react";
import { MathComponent } from "mathjax-react";
import CustomInput from "components/labs/components/CustomInput";
import { findCriticalValue } from "../../helpers/findCriticalValue";

import styles from "./CriticalSignificance.module.scss";

const INI = {
  a: 0.25,
};

const INPUT_PATTERN = /^-?(\d+\.?\d*)?$/;

export default function CriticalSignificance() {
  const ref_a = useRef();
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const buttonHandler = () => {
    const a = Number(ref_a.current.value || INI.a);
    if (a <= 0 || a >= 1) {
      setError("Рівень значущості має бути більше 0 та менше 1");
      setResult("");
      return;
    }
    setError("");
    setResult(findCriticalValue(a));
  };

  return (
    <div className={styles.container}>
      <p className={styles.header}>Визначення критичного значення</p>
      <div className={styles.input}>
        <label className={styles.label} htmlFor="a">
          Рівень значущості (
          <span className={styles.inlineFormula}>
            <MathComponent tex={String.raw`\alpha`} display={false} />
          </span>
          )
        </label>
        <CustomInput
          inputRef={ref_a}
          placeholder={INI.a}
          id="a"
          regExpPattern={INPUT_PATTERN}
        />
      </div>
      <span className={styles.error}>{error}</span>
      <button className={styles.btn} onClick={buttonHandler}>
        Обчислити
      </button>
      <div className={styles.result}>{result || "Результат"}</div>
    </div>
  );
}
