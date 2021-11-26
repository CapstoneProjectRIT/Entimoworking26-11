import React from 'react';
import { create } from 'react-test-renderer';
import Mytask from './Mytask';

describe('My first snapshot test', () => {
  test('testing app button', () => {
    const tree = create(<Mytask />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
