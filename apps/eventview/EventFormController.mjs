import Component from '../../src/controller/Component.mjs';

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
    async onSaveButtonClick(data) {

        let form       = this.getReference('main-form'), me = this,
            formValues = await form.getSubmitValues();


        let event = formValues.event[0];

        console.log(event);

        let eventStr = JSON.stringify(event);


        fetch('http://192.168.1.118/otgservices/createEvent.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer YOUR_TOKEN' // if needed
            },
            body: eventStr
        })
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                console.log('✅ Success:', data);
                me.component.up('dialog').hide();

                form.reset();

                setTimeout(() => {
                    console.log("Loading the Store");
                    me.getStore('eventStore').load();
                }, 300);



            })
            .catch(error => {
                console.error('❌ Error:', error);
            });

        me.component.up('dialog').hide();





    }

}

export default Neo.setupClass(EventFormController);