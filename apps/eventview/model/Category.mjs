import Model from '../../../src/data/Model.mjs';

/**
 * @class EventView.model.Category
 * @extends Neo.data.Model
 */
class Category extends Model {
    static config = {
        /**
         * @member {String} className='EventView.model.Category'
         * @protected
         */
        className: 'EventView.model.Category',
        /**
         * @member {Object[]} fields
         */
        fields: [
            {
                name: 'category_id',
                type: 'Int'
            },
            {
                name: 'name',
                type: 'String'
            }]
    }
}

export default Neo.setupClass(Category);
