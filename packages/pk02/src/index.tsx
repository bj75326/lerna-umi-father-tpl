import React from 'react';
import { Button } from 'antd';

export interface HelloWorldProps {}

const HelloWorld: React.FC<HelloWorldProps> = (props) => (
  <Button type="primary">Hello PK02 --watch</Button>
);

export default HelloWorld;
