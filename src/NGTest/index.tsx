import './index.less';
import React from 'react';

function Child1({ name }: { name: string }) {
  return <h2>Child1 -- {name}</h2>;
}

function Child2({ name }: { name: string }) {
  return <h2>Child2 -- {name}</h2>;
}

export default ({ title }: { title: string }) => (
  <div className="child-test-wrap">
    <div>父组件 --- {title}</div>
    <Child1 name="巴拉啦" />
    <Child2 name="古拉啦" />
  </div>
);
