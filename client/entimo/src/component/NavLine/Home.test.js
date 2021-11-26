import React from 'react';
import { create } from 'react-test-renderer';
import Home from './Home';

describe('My first snapshot test', () => {
  test('testing app button', () => {
    const tree = create(<Home />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
