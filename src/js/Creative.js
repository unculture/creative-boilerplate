//import BaseCreative from 'smartcontent-cdk/lib/classes/BaseCreative';
//import JqueryCreative from 'smartcontent-cdk/lib/classes/JqueryCreative';
import VueCreative from 'smartcontent-cdk/lib/classes/VueCreative';

export default class extends VueCreative {

  /*
   Retrieve data using the following methods:
   - meta: this.dataGetMeta()
   - campaign: this.dataGetCampaign()
   - content-items: this.dataGetItems()
   */

  /**
   * Called when all data is received
   *
   */
  // dataReceived() {
  // }


  /**
   * Called when all assets are loaded
   *
   */
  // assetsLoaded() {
  // }

  /**
   * Called at the moment Creative is shown.
   * Optional, remove if not required.
   */
  // start() {
  // }


  // CREATIVE SPECIFIC
  // -----------------

  /**
   * If extending VueCreative this should return Vue
   * components to pass to the root Vue instance.
   *
   * @returns {*}
   */
  // components() {
  //   return {};
  // }

  /**
   * If verification of Creative asset loading is required,
   * return a list of assets `type` and `name`.
   * Valid types are 'image' and 'video'.
   *
   * @return []
   */
  // creativeAssets() {
  //   return [
  //     {
  //       name: 'foo',
  //       type: 'image'
  //     }
  //   ];
  // }

  /**
   * If verification of asset loading is required, return a
   * list of content item asset `type` and `name`.
   * Valid types are 'image' and 'video'.
   *
   * @return []
   */
  // itemAssets() {
  //   return [
  //     {
  //       name: 'foo',
  //       type: 'image'
  //     }
  //   ];
  // }
}
