
const subscribe = require('./subscribe');
import * as Ieee8500Controller from '../js/controllers/ieee8500/Ieee8500Controller';
const subscribeUrls = {
  responseQueueTopic: '/temp-queue/response-queue',
  simulationStatusTopic: '/topic/goss/gridappsd/simulation/status/'  
};

test('Response Queue Topic', () => {
  expect(subscribeUrls.responseQueueTopic).toBe('/temp-queue/response-queue');
});

test('Simulation Status Topic', () => {   
  expect(subscribeUrls.simulationStatusTopic).toBe('/topic/goss/gridappsd/simulation/status/');
});

it('subscribe response queue topic', () => {
  expect.assertions(1);
  return subscribe().then(data => expect(data).toEqual('sim1'));
});