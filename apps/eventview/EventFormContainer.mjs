import BaseFormContainer from '../../src/form/Container.mjs';

import TextField from "../../src/form/field/Text.mjs";
import NumberField from "../../src/form/field/Number.mjs";
import DateField from "../../src/form/field/Date.mjs";
import {CheckBox} from "../../src/form/field/_export.mjs";


import EventFormController  from './EventFormController.mjs';
import ComboBox from "../../src/form/field/ComboBox.mjs";

/**
 * @class Event.EventFormContainer
 * @extends Neo.form.Container
 */
class EventFormContainer extends BaseFormContainer {
    static config = {
        /**
         * @member {String} className='Form.view.FormContainer'
         * @protected
         */
        className: 'Event.EventFormContainer',
        /**
         * @member {String[]} baseCls=['form-form-container','neo-container'],
         * @protected
         */
        baseCls: ['form-form-container', 'neo-container'],
        /**
         * @member {Neo.controller.Component} controller=FormContainerController
         */
        controller: EventFormController,
        /**
         * @member {Object[]} items
         */

        items: [
            {
                module: TextField,
                labelText: 'Event Name',
               // name : 'name',
                name : 'event[0].name',
                labelWidth: 200,
                reference: 'name-field'
            },
            {
                module: DateField,
                labelText: 'Start Date',
                placeholder: 'YYYY-MM-DD',
                format: 'Y-m-d', // neo.mjs uses date-fns format,
                name : 'event[0].start_time',
                reference: 'start-time-field',
                labelWidth: 200,
            },
            {
                module: TextField,
                labelText: 'Location',
                labelWidth: 200,
                name : 'event[0].location',
                reference: 'location-field'
            },
            //meetup_location
            {
                module: TextField,
                labelText: 'Meetup At',
                labelWidth: 200,
                name : 'event[0].meetup_location',
                reference: 'meetup-location-field'
            },
            {
                module: TextField,
                labelText: 'Recommended Vehicle',
                name : 'event[0].recommended_vehicle',
                reference: 'rec-field',
                labelWidth: 200,
            },

            {
                module: NumberField,
                labelText: 'Technical Rating',
                name : 'event[0].technical_rating',
                labelWidth: 200,
                reference: 'technical-rating-field'
            },

            {
                module        : ComboBox,
                name : 'event[0].category_id',
                labelText        : 'Category Type',
                labelWidth : 200,
                placeholder  : 'Select a category...',
                valueField   : 'id',
                displayField : 'name',
                store        : [
                    { id: '13',    name: 'Overlanding' },
                    { id: '14',    name: 'Rock Crawling' },
                    { id: '15',  name: 'Scenic Drive' },
                    { id: '16',   name: 'Night Rin' }
                ]
            },
            /*
            {
                module: NumberField,
                labelText: 'Category',
                name : 'event[0].category_id',
                labelWidth: 200,
                reference: 'category-field'
            },*/
            {
                module: NumberField,
                labelText: 'Max Rigs',
                name : 'event[0].max_rigs',
                labelWidth: 200,
                reference: 'max-rigs-field'
            },
            // waitlist_limit
            {
                module: NumberField,
                labelText: 'Waitlist Limit',
                name : 'event[0].waitlist_limit',
                labelWidth: 200,
                reference: 'waitlist-limit-field'
            },
            {
                module: TextField,
                labelText: 'Communications', labelWidth: 200,
                name : 'event[0].communications',
                reference: 'comms-field'
            },

            {
                module: TextField,
                labelText: 'Permit Fees', labelWidth: 200,
                name : 'event[0].permits_fees',
                reference: 'fees-field'
            },

            // gpx_file_url

            {
                module: TextField,
                labelText: 'Route URL', labelWidth: 200,
                name : 'event[0].gpx_file_url',
                reference: 'url-field'
            },

            {
                module: CheckBox,
                labelText: 'Public',
                name : 'event[0].is_public',
                labelWidth: 200,
                reference: 'public-field'
            },
            {
                module: CheckBox,
                labelText: 'Children',
                name : 'event[0].children_permitted',
                labelWidth: 200,
                reference: 'children-field'
            },
            {
                module: CheckBox,
                labelText: 'Dogs',
                name : 'event[0].dogs_permitted',
                labelWidth: 200,
                reference: 'dogs-field'
            },
            {
                ntype: 'toolbar',
                layout: {ntype: 'hbox', pack: 'end'},

                itemDefaults: {
                    ntype: 'button',
                    style: {
                        margin: '0 10px 0 0'
                    }
                },

                items: [{
                    text: 'Cancel/Close',
                    handler:'onCancelButtonClick'
                }, {
                    text: 'Save',
                    handler: 'onSaveButtonClick'
                }]
            }

        ]

    }
}

export default Neo.setupClass(EventFormContainer);