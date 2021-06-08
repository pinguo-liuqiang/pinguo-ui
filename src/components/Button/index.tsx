import React from 'react';
import './index.less';

export default function (props: any) {
  const { large, bold } = props;
  let className = '';
  if (large) {
    className += 'large ';
  }
  if (bold) {
    className += 'bold';
  }
  return (
    <button
      className={className}
      style={{
        color: props.color,
      }}
    >
      {props.children}
    </button>
  );
}
