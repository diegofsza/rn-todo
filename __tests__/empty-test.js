import renderer from 'react-test-renderer';
import React from 'react';
import {Empty} from '../src/components/main-layout/empty';

it('renders', () => {
  renderer.create(<Empty />);
});
