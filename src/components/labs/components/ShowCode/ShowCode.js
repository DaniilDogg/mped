import { useRef, useState, useEffect } from "react";
import { Transition } from "react-transition-group";

import ShowCodeButton from "./components/ShowCodeButton";
import CodeComponent from "./components/CodeComponent";

import styles from "./ShowCode.module.scss";

export default function ShowCode({ id }) {
  const [isShown, setIsShown] = useState(false);
  const nodeRef = useRef();
  const codeRef = useRef();
  const [codeHeight, setCodeHeight] = useState(0);

  useEffect(() => {
    setCodeHeight(codeRef?.current?.offsetHeight);
  }, []);

  const DURATION = 300;

  const defaultStyle = {
    overflow: "hidden",
    transition: `max-height ${DURATION}ms ease-in-out`,
    minHeight: 0,
    marginBottom: "5rem",
  };

  const transitionStyles = {
    entering: { maxHeight: codeHeight },
    entered: { maxHeight: codeHeight, marginBottom: 0 },
    exiting: { maxHeight: 0 },
    exited: { maxHeight: 0, marginBottom: "5rem" },
  };

  return (
    <div className={styles.container}>
      <ShowCodeButton
        isShown={isShown}
        duration={DURATION}
        setIsShown={setIsShown}
        isDisabled={codeHeight == 0}
      />
      <Transition nodeRef={nodeRef} in={isShown} timeout={DURATION}>
        {(state) => (
          <div
            ref={nodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <div ref={codeRef} className={styles.codeWrapper}>
              <CodeComponent id={id} />
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
