
import Dialog from '../../src/dialog/Base.mjs';
import EventDialogController from "./EventFormController.mjs";
import EventFormContainer from "./EventFormContainer.mjs";

/**
 * @class EventView.EventDialog
 * @extends Neo.dialog.Base
 */
class EventDialog extends Dialog {
    static config = {
        /**
         * @member {String} className='Neo.examples.dialog.DemoDialog'
         * @protected
         */
        className: 'EventView.Dialog',
        /**
         * Custom config to dynamically enable / disable the animateTargetId
         * @member {Boolean} animated_=true
         */
        animated_: true,

        width : 700,

        labelWidth : 200,

        hidden: true,
        /**
         * @member {Object} containerConfig
         */
        containerConfig: {
            style: {
                padding: '1em'
            }
        },
        /**
         * @member {Boolean} modal=true
         */
        modal: true,

        /**
         * @member {Record|null} record_=null
         */
        record_: null,
        /**
         * @member {Object} wrapperStyle
         */
        wrapperStyle: {
            width: '40%'
        }
    }
    /**
     * Custom class field to store the created dialog.Base instance
     * @member {Neo.dialog.Base|null} dialog=null
     */
    dialog = null

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        me.items = [
            {
                module   : EventFormContainer,
                reference: 'main-form',
                //style    : {margin: '20px'},
            }

        ]
    }



}

export default Neo.setupClass(EventDialog);
