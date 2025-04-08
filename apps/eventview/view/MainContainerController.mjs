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

    editButtonHandler (data) {
        console.log('Edit handler' + data.component.record.id);
    }

    onForumsClick (data) {
        Neo.Main.redirectTo({
            url : 'https://overlandtrailguides.com'
        })
    }

    gpxrenderer({value}) {
        if (!value) {
            return '';
        }
        return '<a href="' + value + '" target="_blank">Link</a>';
    }

    /**
     * @param {Object} data
     */
    createDialog(data) {
        let me        = this.component,
            button    = data.component,
            nextIndex = me.index + 1;

        button.disabled = true;


        if (!me.dialog) {
            import('../EventDialog.mjs').then(module => {
                me.dialog = Neo.create({
                    module : module.default,
                    appName: me.appName,
                    boundaryContainerId: me.boundaryContainerId,
                    index: nextIndex,
                    listeners: { hide: this.onWindowHide, scope : this },
                    modal: true, //me.app.mainView.down({valueLabelText: 'Modal'}).checked,
                    trapFocus: true,
                    closeAction: 'hide',
                    animateTargetId: button.id,
                    title: 'Event Create ',
                    windowId: me.windowId,
                    stateProvider: {parent: this.getStateProvider()}
                })
                console.log(me.dialog);
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
        console.log("Main Window Close");
    }


    onMyRowClick({view, record, rowIndex, event}) {
        console.log('Selected Record:', record.id);
    }

    /**
     * categoryRenderer
     */

    categoryRenderer(value) {
        var me = this;
        let categoryStore = me.getStore('categoriesStore');
        var thecat = null;

        debugger;
        if (categoryStore) {
            categoryStore.findFirst('catgegorid_id', value).then(cat => {
                console.log(cat);
                thecat = cat;
            })
        }
        if ( thecat) {
            return thecat.name;
        }
    }
}

export default Neo.setupClass(MainContainerController);
