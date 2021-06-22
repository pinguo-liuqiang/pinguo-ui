import React, { FC } from 'react';
import './index.less';

interface IProps {
  title: string;
  tips?: string;
  className?: string;
}

const SectionTitle: FC<IProps> = ({ title, tips, className }) => {
  return (
    <div className={'m-section-title ' + (className ? className : '')}>
      <div className="u-title">{title}</div>
      {tips ? <div className="u-tips">({tips})</div> : null}
    </div>
  );
};

export default SectionTitle;
