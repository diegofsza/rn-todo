import renderer from 'react-test-renderer';
import React from 'react';
import {SectionHeader} from '../src/components/main-layout/section-header';

it('renders', () => {
  renderer.create(<SectionHeader />);
});
