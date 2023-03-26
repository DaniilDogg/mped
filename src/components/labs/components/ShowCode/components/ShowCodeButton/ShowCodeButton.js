import styles from "./ShowCodeButton.module.scss";
import iconStyles from "styles/icon.module.scss";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

export default function ShowCodeButton({
  isShown,
  duration,
  setIsShown,
  isDisabled,
}) {
  const iconRef = useRef();
  const buttonRef = useRef();

  const onClickHandler = () => {
    setIsShown((prev) => {
      if (!prev) {
        setTimeout(() => {
          buttonRef.current.scrollIntoView();
        }, duration);
      }
      return !prev;
    });
  };

  const classNames = {
    enterActive: styles.enterActive,
    enterDone: styles.enterDone,
    exitActive: styles.exitActive,
    exitDone: styles.exitDone,
  };

  return (
    <button
      ref={buttonRef}
      className={styles.showCodeBtn}
      onClick={onClickHandler}
      disabled={isDisabled}
    >
      <span className={styles.text}>Код програми</span>
      <CSSTransition
        nodeRef={iconRef}
        in={isShown}
        timeout={50}
        classNames={classNames}
      >
        <span ref={iconRef} className={iconStyles.icon}>
          expand_more
        </span>
      </CSSTransition>
    </button>
  );
}
