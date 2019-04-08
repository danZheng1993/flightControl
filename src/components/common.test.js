import React from 'react';
import renderer from 'react-test-renderer';

import { Wrapper, Container, Spliter } from './common';

describe('Common Components Test', () => {
  it('`Wrapper` renders correctly', () => {
    renderer.create(
      <Wrapper />
    );
  });
  it('`Container` renders correctly', () => {
    renderer.create(
      <Container />
    );
  });
  it('`Spliter` renders correctly', () => {
    renderer.create(
      <Spliter />
    );
  });
});
