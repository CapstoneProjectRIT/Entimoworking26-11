import React from 'react';
import { create } from 'react-test-renderer';
import MyUpdates from './MyUpdates';

describe('My first snapshot test', () => {
  test('testing app button', () => {
    const tree = create(<MyUpdates />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
