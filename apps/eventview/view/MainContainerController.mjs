import Component from '../../../src/controller/Component.mjs';


/**
 * @class EventView.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends Component {
    static config = {
        /**
         * @member {String} className='EventView.view.MainContainerController'
         * @protected
         */
        className: 'EventView.view.MainContainerController'
    }


    joinButtonHandler(data) {
        console.log('Join' + data);
    }

    editButtonHandler(data) {
        console.log('Edit handler' + data.component.record.id);
    }

    onForumsClick(data) {
        Neo.Main.redirectTo({
            url: 'https://overlandtrailguides.com'
        })
    }

    /**
     * gpx file is located at the Rout
     * NOT WORKING since this is not the Grid Controller but the ViewPort Controller.
     * @param value
     * @returns {string}
     */
    gpxrenderer({value}) {
        if (!value) {
            return '';
        }
        return '<a href="' + value + '" target="_blank">Link</a>';
    }


    /**
     * Called for the AfterRender in the Gird, it will allow the Edit/Delete Buttons to Work.
     */
    createDialogFromInit() {
        this.createDialog();
    }

    /**
     * @param {Object} data
     */
    createDialog(data) {
        let me = this.component;

        // Used for Animation anchor
        let button = this.component.getReference('create-dialog-button');

        if (!me.dialog) {
            import('../EventDialog.mjs').then(module => {
                console.log("Helo");
                me.dialog = Neo.create({
                    module             : module.default,
                    appName            : me.appName,
                    boundaryContainerId: me.boundaryContainerId,
                    index              : 0,
                    autoShow           : false,
                    listeners          : {hide: this.onWindowHide, scope: this},
                    modal              : true,
                    trapFocus          : true,
                    closeAction        : 'hide',
                    animateTargetId    : button.id,
                    title              : 'Event Create ',
                    windowId           : me.windowId,
                    stateProvider      : {parent: this.getStateProvider()}
                });
            })
        } else {
            me.dialog.show()
        }
    }

    /**
     *
     */
    onWindowHide() {
        let me = this;
        me.getReference('create-dialog-button').disabled = false;

        if ( this.component.getController().component.dialog) {
            let mainform = me.component.getController().component.dialog.getReference('main-form');
            if ( mainform) {
                mainform.reset();
            }
        }
        console.log("Main Window Close");
    }

    /**
     * categoryRenderer
     */

    categoryRenderer(value) {
        var me = this;
        let categoryStore = me.getStore('categoriesStore');
        var thecat = null;
        if (categoryStore) {
            categoryStore.findFirst('catgegorid_id', value).then(cat => {
                console.log(cat);
                thecat = cat;
            })
        }
        if (thecat) {
            return thecat.name;
        }
    }
}

export default Neo.setupClass(MainContainerController);
