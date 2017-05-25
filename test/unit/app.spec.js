import {EventAggregator} from 'aurelia-event-aggregator';
jest.mock('aurelia-event-aggregator', () => ({
  EventAggregator: {
    publish: jest.fn()
  }
}));

import {App} from '../../src/app';

describe('App Component', () => {
  let app;

  beforeEach(() => {
    app = new App(EventAggregator);
  });

  test('constructor is defined', () => {
    expect(app.constructor).toBeDefined();
  });

  test('fire event', () => {
    app.fireEvent();

    expect(EventAggregator.publish).toHaveBeenCalledTimes(1);
  })
});
