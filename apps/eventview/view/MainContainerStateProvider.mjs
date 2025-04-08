import Provider from '../../../src/state/Provider.mjs';
import EventStore from "../store/Events.mjs";
import Categories from "../store/Categories.mjs";

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
            categoriesStore: {
                module: Categories,
                autoLoad: true,
              //  listeners: {load: 'onCategoryStoreLoad'},
            },
            eventStore: {
                module: EventStore,
                autoLoad: true,

            },
        }
    }

}

export default Neo.setupClass(MainContainerStateProvider);
