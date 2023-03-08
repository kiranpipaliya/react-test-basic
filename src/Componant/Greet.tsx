import React from 'react';
type IProps = {
  name?: string;
};
const Greet = ({ name }: IProps) => {
  return <div>Hello {name}</div>;
};

export default Greet;
