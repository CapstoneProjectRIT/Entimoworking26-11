import React from 'react';
import { create } from 'react-test-renderer';
import Trendi from './Trendi';

describe('My first snapshot test', () => {
  test('testing app button', () => {
    const tree = create(<Trendi />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
