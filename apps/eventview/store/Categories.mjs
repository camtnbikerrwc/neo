import Store from '../../../src/data/Store.mjs';
import Category from '../model/Category.mjs';

/**
 * @class EventView.store.Categories
 * @extends Neo.data.Store
 */
class Categories extends Store {
    static config = {
        /**
         * @member {String} className='EventView.store.Categories'
         * @protected
         */
        className: 'EventView.store.Categories',

        /**
         * @member {Neo.data.Model} model=Category
         */
        model: Category,

        keyProperty : 'category_id',

        url : 'http://192.168.1.118/otgservices/getCategories.php',

        responseRoot : 'rows'
    }
}

export default Neo.setupClass(Categories);
