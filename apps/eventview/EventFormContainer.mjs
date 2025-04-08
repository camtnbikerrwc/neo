import BaseFormContainer from '../../src/form/Container.mjs';

import TextField from "../../src/form/field/Text.mjs";
import NumberField from "../../src/form/field/Number.mjs";
import DateField from "../../src/form/field/Date.mjs";
import {CheckBox} from "../../src/form/field/_export.mjs";


import EventFormController from './EventFormController.mjs';
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
         * @member {String[]} cls=['form-form-container'],
         * @protected
         */
        cls: ['form-form-container'],
        /**
         * @member {Neo.controller.Component} controller=FormContainerController
         */
        controller: EventFormController,
        /**
         * @member {Object[]} items
         */

        formGroup: 'event[0]',

        items: [
            {
                module   : TextField,
                labelText: 'Event Name',
                // name : 'name',
                name      : 'name',
                labelWidth: 200,
                reference : 'name-field'
            },
            {
                module     : DateField,
                labelText  : 'Start Date',
                format     : 'Y-m-d', // neo.mjs uses date-fns format,
                name       : 'start_time',
                reference  : 'start-time-field',
                labelWidth : 200,
            },
            {
                module    : TextField,
                labelText : 'Location',
                labelWidth: 200,
                name      : 'location',
                reference : 'location-field'
            },
            //meetup_location
            {
                module    : TextField,
                labelText : 'Meetup At',
                labelWidth: 200,
                name      : 'meetup_location',
                reference : 'meetup-location-field'
            },
            {
                module    : TextField,
                labelText : 'Recommended Vehicle',
                name      : 'recommended_vehicle',
                reference : 'rec-field',
                labelWidth: 200,
            },

            {
                module    : NumberField,
                labelText : 'Technical Rating',
                name      : 'technical_rating',
                labelWidth: 200,
                reference : 'technical-rating-field'
            },

            {
                module      : ComboBox,
                name        : 'category_id',
                labelText   : 'Category Type',
                labelWidth  : 200,
                placeholder : 'Select a category...',
                valueField  : 'category_id',
                displayField: 'name',
                bind: {
                    store: 'stores.categories'
                }
            },
            {
                module    : NumberField,
                labelText : 'Max Rigs',
                name      : 'max_rigs',
                labelWidth: 200,
                reference : 'max-rigs-field'
            },
            // waitlist_limit
            {
                module    : NumberField,
                labelText : 'Waitlist Limit',
                name      : 'waitlist_limit',
                labelWidth: 200,
                reference : 'waitlist-limit-field'
            },
            {
                module   : TextField,
                labelText: 'Communications', labelWidth: 200,
                name     : 'communications',
                reference: 'comms-field'
            },

            {
                module   : TextField,
                labelText: 'Permit Fees', labelWidth: 200,
                name     : 'permits_fees',
                reference: 'fees-field'
            },

            // gpx_file_url

            {
                module   : TextField,
                labelText: 'Route URL', labelWidth: 200,
                name     : 'gpx_file_url',
                reference: 'url-field'
            },

            {
                module    : CheckBox,
                labelText : 'Public',
                name      : 'is_public',
                labelWidth: 200,
                reference : 'public-field'
            },
            {
                module    : CheckBox,
                labelText : 'Children',
                name      : 'children_permitted',
                labelWidth: 200,
                reference : 'children-field'
            },
            {
                module    : CheckBox,
                labelText : 'Dogs',
                name      : 'dogs_permitted',
                labelWidth: 200,
                reference : 'dogs-field'
            },
            {
                ntype : 'toolbar',
                layout: {ntype: 'hbox', pack: 'end'},

                itemDefaults: {
                    ntype: 'button',
                    style: {
                        margin: '0 10px 0 0'
                    }
                },

                items: [{
                    text   : 'Cancel/Close',
                    handler: 'onCancelButtonClick'
                }, {
                    text   : 'Save',
                    handler: 'onSaveButtonClick'
                }]
            }

        ]

    }
}

export default Neo.setupClass(EventFormContainer);