import React from 'react';
import { Button } from 'antd';

export interface HelloWorldProps {} // eslint-disable-line

const HelloWorld: React.FC<HelloWorldProps> = () => (
  <Button type="primary">Hello PK02 --watch</Button>
);

export default HelloWorld;
