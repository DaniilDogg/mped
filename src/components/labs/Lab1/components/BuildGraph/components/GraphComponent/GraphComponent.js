import { useRef, useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import LinearGraph from "components/labs/components/LinearGraph";

export default function GraphComponent({ text, X, Y, isShown, duration }) {
  const nodeRef = useRef();
  const graphRef = useRef();
  const [graphHeight, setGraphHeight] = useState(0);

  useEffect(() => {
    setGraphHeight(graphRef?.current?.offsetHeight);
  }, []);

  const defaultStyle = {
    overflow: "hidden",
    transition: `max-height ${duration}ms ease-in-out`,
    minHeight: 0,
  };

  const transitionStyles = {
    entering: { maxHeight: graphHeight },
    entered: { maxHeight: graphHeight },
    exiting: { maxHeight: 0 },
    exited: { maxHeight: 0 },
  };

  return (
    <Transition nodeRef={nodeRef} in={isShown} timeout={duration}>
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div style={{ overflow: "auto" }}>
            <div
              style={{
                minHeight: "20rem",
                minWidth: "25rem",
              }}
              ref={graphRef}
            >
              <LinearGraph text={text} X={X} Y={Y} />
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}
