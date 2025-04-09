import Component from '../../src/controller/Component.mjs';
import Toast from '../../src/component/Toast.mjs'


/**
 * @class Form.view.FormContainerController
 * @extends Neo.controller.Component
 */
class EventFormController extends Component {
    static config = {
        /**
         * @member {String} className='Form.view.FormContainerController'
         * @protected
         */
        className: 'Eventview.EventFormController'
    }

    /**
     *
     */
    onComponentConstructed() {
        super.onComponentConstructed();

    }

    /**
     * onCancelButtonClick
     */

    onCancelButtonClick(data) {
        let me = this;
        me.component.up('dialog').hide();
    }

    /**
     * @param {Object} data
     */
    async onSaveButtonClick(buttonClick) {

        let form = this.getReference('main-form'), me = this,
            formValues = await form.getSubmitValues();

        let button = me.getReference('saveButton');

        let event = formValues.event[0];

        console.log(event);

        let eventStr = JSON.stringify(event);


        const response = await fetch('http://192.168.1.118/otgservices/createEvent.php', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer YOUR_TOKEN' // if needed
            },
            body   : eventStr
        });

        if (!response.ok) {
            Neo.toast({
                appName       : button.appName,
                title         : 'Error',
                msg           : 'Events Store error',
                position      : 'tr',
                slideDirection: 'left',
                windowId      : button.windowId
            });
            return;
        }

        const data = await response.json();
        me.component.up('dialog').hide();
        me.getStore('eventStore').load();

        Neo.toast({
            appName       : button.appName,
            title         : 'Success',
            msg           : 'Events Store updated successfully',
            position      : 'tr',
            slideDirection: 'left',
            windowId      : button.windowId
        });

        await me.timeout(500);
        form.reset();

    }

}

export default Neo.setupClass(EventFormController);