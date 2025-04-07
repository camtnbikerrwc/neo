import Provider from '../../../src/state/Provider.mjs';
import EventStore from "../store/Events.mjs";

/**
 * @class EventView.view.MainContainerStateProvider
 * @extends Neo.state.Provider
 */
class MainContainerStateProvider extends Provider {
    static config = {
        /**
         * @member {String} className='EventView.view.MainContainerStateProvider'
         * @protected
         */
        className: 'EventView.view.MainContainerStateProvider',
        /**
         * @member {Object} data
         */
        data: {},
        /**
         * @member {Object} stores
         */
        stores: {
            eventStore : {
                module : EventStore,
                autoLoad : true
            }
        }
    }
}

export default Neo.setupClass(MainContainerStateProvider);
