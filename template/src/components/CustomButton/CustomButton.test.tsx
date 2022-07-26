import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import { CustomButton } from './CustomButton';

describe('CustomButton', () => {
  test('Should render correctly', () => {
    const tree = renderer
      .create(<CustomButton title="CustomButton" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
