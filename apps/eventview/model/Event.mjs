import Model from '../../../src/data/Model.mjs';

/**
 * @class EventView.model.Event
 * @extends Neo.data.Model
 */
class Event extends Model {
    static config = {
        /**
         * @member {String} className='EventView.model.Event'
         * @protected
         */
        className: 'EventView.model.Event',
        /**
         * @member {Object[]} fields
         */
        fields: [
            {
                name: 'event_id',
                type: 'Int'
            },

            {
                name: 'name',
                type: 'String'
            },

            {
                name: 'start_time',
                type: 'String'
            },
            {
                name : 'user_name',
                type : 'String'
            },
            {
                name : 'count',
                type : 'Int'
            },
            {
                name : 'max_rigs',
                type : 'Int'
            },

            {
                name : 'summary',
                type : 'String'
            },
            {
                name: 'communications',
                type : 'String'
            },

            {
                name: 'meetup_location',
                type : 'String'
            },

            {
                name: 'technical_rating',
                type : 'Int'
            },
            {
                name: 'category_id',
                type : 'Int'
            },

            {
                name: 'is_public',
                type : 'Boolean'
            },

            {
                name: 'recommended_vehicle',
                type : 'string'
            },

            {
                name: 'communications',
                type : 'string'
            },




            // ": "AWD or 4x4, stock okay",
            //       "terrain": "Forested trails, occasional mud",
            //       "communications": "GMRS Ch. 2, hourly check-ins",
            //       "summary": "Scenic and beginner-friendly forest route",
            //       "details": "Lunch at Mirror Lake, photos encouraged!",
            //       "cover_photo_url": "https://example.com/images/cascade.jpg",
            //       "meetup_time": "2025-06-15 07:30:00-07",
            //       "meetup_location": "Sno-Park, Highway 26, OR",
            //       "gpx_file_url": "https://example.com/files/cascade.kml",
            //       "permits_fees": null,
            //       "required_gear": null,
            //       "dogs_permitted": true,
            //       "children_permitted": true,
            //       "created_at": "2025-04-04T00:43:31.607892Z",
            //       "updated_at": "2025-04-04T00:43:31.607892Z"
            //     }
            //   ]
            // }

            {
                name: 'edit'
            }

        ]
    }

}

export default Neo.setupClass(Event);
