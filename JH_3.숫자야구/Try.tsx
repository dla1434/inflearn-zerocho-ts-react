import * as React from 'react';
import { TryInfo } from './types';
// import { TryInfo } from './NumberBaseball';

const Try: React.FunctionComponent<{ tryInfo: TryInfo }> = ({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};

//PropTypes
export default Try;
