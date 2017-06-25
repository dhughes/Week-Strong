import React from 'react';

const LoadingAnimation = props =>
  <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <rect x="0" y="0" width="100" height="100" fill="none" />
    <rect x="15" y="15" width="20" height="20" fill={props.light}>
      <animate
        attributeName="fill"
        from={props.light}
        to={props.dark}
        repeatCount="indefinite"
        dur="1s"
        begin="0s"
        values="#3c302e;#3c302e;#cec9c9;#cec9c9"
        keyTimes="0;0.1;0.2;1"
      />
    </rect>
    <rect x="40" y="15" width="20" height="20" fill={props.light}>
      <animate
        attributeName="fill"
        from={props.light}
        to={props.dark}
        repeatCount="indefinite"
        dur="1s"
        begin="0.125s"
        values="#3c302e;#3c302e;#cec9c9;#cec9c9"
        keyTimes="0;0.1;0.2;1"
      />
    </rect>
    <rect x="65" y="15" width="20" height="20" fill={props.light}>
      <animate
        attributeName="fill"
        from={props.light}
        to={props.dark}
        repeatCount="indefinite"
        dur="1s"
        begin="0.25s"
        values="#3c302e;#3c302e;#cec9c9;#cec9c9"
        keyTimes="0;0.1;0.2;1"
      />
    </rect>
    <rect x="15" y="40" width="20" height="20" fill={props.light}>
      <animate
        attributeName="fill"
        from={props.light}
        to={props.dark}
        repeatCount="indefinite"
        dur="1s"
        begin="0.875s"
        values="#3c302e;#3c302e;#cec9c9;#cec9c9"
        keyTimes="0;0.1;0.2;1"
      />
    </rect>
    <rect x="65" y="40" width="20" height="20" fill={props.light}>
      <animate
        attributeName="fill"
        from={props.light}
        to={props.dark}
        repeatCount="indefinite"
        dur="1s"
        begin="0.375s"
        values="#3c302e;#3c302e;#cec9c9;#cec9c9"
        keyTimes="0;0.1;0.2;1"
      />
    </rect>
    <rect x="15" y="65" width="20" height="20" fill={props.light}>
      <animate
        attributeName="fill"
        from={props.light}
        to={props.dark}
        repeatCount="indefinite"
        dur="1s"
        begin="0.75s"
        values="#3c302e;#3c302e;#cec9c9;#cec9c9"
        keyTimes="0;0.1;0.2;1"
      />
    </rect>
    <rect x="40" y="65" width="20" height="20" fill={props.light}>
      <animate
        attributeName="fill"
        from={props.light}
        to={props.dark}
        repeatCount="indefinite"
        dur="1s"
        begin="0.625s"
        values="#3c302e;#3c302e;#cec9c9;#cec9c9"
        keyTimes="0;0.1;0.2;1"
      />
    </rect>
    <rect x="65" y="65" width="20" height="20" fill={props.light}>
      <animate
        attributeName="fill"
        from={props.light}
        to={props.dark}
        repeatCount="indefinite"
        dur="1s"
        begin="0.5s"
        values="#3c302e;#3c302e;#cec9c9;#cec9c9"
        keyTimes="0;0.1;0.2;1"
      />
    </rect>
  </svg>;

LoadingAnimation.defaultProps = {
  light: '#cec9c9',
  dark: '#3c302e'
};

export default LoadingAnimation;
