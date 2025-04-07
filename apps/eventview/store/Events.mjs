import Event from '../model/Event.mjs';
import Store from '../../../src/data/Store.mjs';

/**
 * @class EventView.store.Events
 * @extends Neo.data.Store
 */
class Events extends Store {
    static config = {
        /**
         * @member {String} className='EventView.store.Events'
         * @protected
         */
        className: 'EventView.store.Events',
        /**
         * @member {Neo.data.Model} model=Event
         */
        model: Event,

        url : 'http://192.168.1.118/otgservices/getOTGEvents.php',

        responseRoot : 'rows'
    }
}

export default Neo.setupClass(Events);
