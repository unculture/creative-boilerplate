import events from 'smartcontent-cdk/lib/events';
import meta from '../../test/data/meta';
import campaign from '../../test/data/campaign';
import dataItems from '../../test/data/data';

document.addEventListener('DOMContentLoaded', () => {
  events(meta, campaign, dataItems);
});