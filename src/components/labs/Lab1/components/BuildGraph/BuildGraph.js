import { useRef, useState } from "react";

import CustomInput from "components/labs/components/CustomInput";
import GraphComponent from "./components/GraphComponent";
import { erf } from "../../helpers/erf";
import styles from "./BuildGraph.module.scss";

const TITLE = "Erf(t)";
const NAME_X = "t";
const NAME_Y = "F(t)";
const INI = {
  t0: 0,
  dt: 0.1,
  tk: 5,
};

const DURATION = 300;

const build = (t0, tk, dt) => {
  const data = { X: [], Y: [] };
  for (let t = t0; t < tk; t += dt) {
    let x = Number(Number.parseFloat(t).toFixed(3));
    let y = x > 3.5 ? 0.5 : Number(Number.parseFloat(erf(x)).toFixed(3));
    data.X.push(x);
    data.Y.push(y);
  }
  return data;
};

const INPUT_PATTERN = /^-?(\d+\.?\d*)?$/;

export default function BuildGraph() {
  const ref_t0 = useRef();
  const ref_tk = useRef();
  const ref_dt = useRef();
  const gotoRef = useRef();
  const [data, setData] = useState({});
  const [isShown, setIsShown] = useState(false);

  const buttonHandler = () => {
    const inputs = {
      t0: Number(ref_t0.current.value || INI.t0),
      tk: Number(ref_tk.current.value || INI.tk),
      dt: Number(ref_dt.current.value || INI.dt),
    };
    if (inputs.tk > inputs.t0 && inputs.tk > inputs.t0 + inputs.dt) {
      const d = build(inputs.t0, inputs.tk, inputs.dt);
      setData(d);
      setIsShown(true);
      setTimeout(() => {
        gotoRef.current.scrollIntoView();
      }, DURATION);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.header}>Побудова графіку функції</p>
        <div ref={gotoRef} className={styles.inputGroup}>
          <span className={styles.label}>Початкове значення</span>
          <CustomInput
            inputRef={ref_t0}
            placeholder={INI.t0}
            regExpPattern={INPUT_PATTERN}
          />
          <span className={styles.label}>Кінцеве значення</span>
          <CustomInput
            inputRef={ref_tk}
            placeholder={INI.tk}
            regExpPattern={INPUT_PATTERN}
          />
          <span className={styles.label}>Крок зміни значення</span>
          <CustomInput
            inputRef={ref_dt}
            placeholder={INI.dt}
            regExpPattern={INPUT_PATTERN}
          />
        </div>
        <button className={styles.btn} onClick={buttonHandler}>
          Побудувати графік
        </button>
      </div>
      <div className={styles.graphWrapper}>
        <GraphComponent
          text={{ title: TITLE, nameX: NAME_X, nameY: NAME_Y }}
          X={data.X}
          Y={data.Y}
          isShown={isShown}
          duration={DURATION}
        />
      </div>
    </div>
  );
}
