import React from 'react';
import './index.less';

interface IProps {
  title: string;
  tips?: string;
  className?: string;
}

export default ({ title, tips, className }: IProps) => {
  return (
    <div className={'m-section-title ' + (className ? className : '')}>
      <div className="u-title">{title}</div>
      {tips ? <div className="u-tips">({tips})</div> : null}
    </div>
  );
};
