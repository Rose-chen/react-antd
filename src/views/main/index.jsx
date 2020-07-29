import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.less';

function onChange(a, b, c) {
  console.log(a, b, c);
}

export default function () {
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  );
}
