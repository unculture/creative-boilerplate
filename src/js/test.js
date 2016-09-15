import metaData from '../../test/data/meta';
import campaignData from '../../test/data/campaign';
import data from '../../test/data/data';

document.addEventListener('DOMContentLoaded', () => {
  window.postMessage({'event': 'metaDataReceived', 'data': metaData}, "*");
  window.postMessage({'event': 'campaignDataReceived', 'data': campaignData}, "*");
  window.postMessage({'event': 'dataReceived', 'data': data}, "*");
  window.postMessage({event: "start", data: null}, "*");
});