//import BaseCreative from 'smartcontent-cdk/lib/classes/BaseCreative';
//import JqueryCreative from 'smartcontent-cdk/lib/classes/JqueryCreative';
import VueCreative from 'smartcontent-cdk/lib/classes/VueCreative';

export default class extends VueCreative {

  /*
   Retrieve data using the following methods:
   - meta:          this.dataGetMeta()
   - campaign:      this.dataGetCampaign()
   - content-items: this.dataGetItems()
   - rulesets:      this.dataGetRulesets()
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
   * return a list of assets `type` and `file`.
   * File should be a path relative to the dist folder.
   * Valid types are 'image' and 'video'.
   *
   * @return []
   */
  // creativeAssets() {
  //   return [
  //     {
  //       file: 'videos/foo.mp4',
  //       type: 'video'
  //     }
  //   ];
  // }

  /**
   * If verification of asset loading is required, return a
   * list of content item asset `type` and `name`.
   * Name is the data item content key.
   * Valid types are 'image' and 'video'.
   *
   * @return []
   */
  // itemAssets() {
  //   return [
  //     {
  //       name: 'avatar',
  //       type: 'image'
  //     }
  //   ];
  // }
}
