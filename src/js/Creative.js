//import BaseCreative from 'smartcontent-cdk/lib/classes/BaseCreative';
//import JqueryCreative from 'smartcontent-cdk/lib/classes/JqueryCreative';
import VueCreative from 'smartcontent-cdk/lib/classes/VueCreative';

export default class extends VueCreative {
  constructor(window) {
    super(window);

  }

  /**
   * Receives data
   *
   * @param data
   */
  metaDataReceivedHandler(data) {

  }

  /**
   * Receives data
   *
   * @param data
   */
  dataReceivedHandler(data) {

  }

  /**
   * Receives campaignData
   *
   * @param data
   */
  campaignDataReceivedHandler(data) {
  }

  /**
   * Triggered when all data is received
   */
  preStart() {
  }

  /**
   * Triggered at the moment Creative is shown
   */
  start() {

  }


  // CREATIVE SPECIFIC
  // -----------------

  /**
   * If extending VueCreative this should return Vue
   * components to pass to the root Vue instance.
   *
   * @returns {}
   */
  components() {
    return {};
  }
}


