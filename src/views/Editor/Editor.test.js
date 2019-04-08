import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';

import { InfoEditor, TypeSelector } from './components';

import { Editor } from './index';

describe('Editor Components Test', () => {
  it('`InfoEditor` renders correctly', () => {
    renderer.create(
      <InfoEditor
        departureTime={moment()}
        departurePoint="test"
        arrivalTime={moment()}
        arrivalPoint="test1"
        onChange={() => {}}
      />
    );
  });
  it('`TypeSelector` renders correctly', () => {
    renderer.create(
      <TypeSelector value="cheap" onChange={() => {}} />
    );
  });
});

describe('Main Editor Test', () => {
  it('`Main Editor` renders correctly', () => {
    renderer.create(
      <Editor
        location={{ search: '' }}
      />
    );
  });
});
