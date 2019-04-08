import React from 'react';
import renderer from 'react-test-renderer';

import { Main } from './index';

import { flightsArray } from 'testData/flights';

describe('Main Page Test', () => {
  it('`Main Editor` renders correctly', () => {
    renderer.create(
      <Main flights={flightsArray} />
    );
  });
});
