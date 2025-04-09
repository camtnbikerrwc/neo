import MainContainerController from './MainContainerController.mjs';
import MainContainerStateProvider from './MainContainerStateProvider.mjs';
import GridContainer from '../../../src/grid/Container.mjs';
import Viewport from '../../../src/container/Viewport.mjs';
import Button from "../../../src/button/Base.mjs";
import Toolbar from "../../../src/toolbar/Base.mjs";
import EventDialog from "../EventDialog.mjs";


/**
 * @class EventView.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static config = {
        /**
         * @member {String} className='EventView.view.MainContainer'
         * @protected
         */
        className: 'EventView.view.MainContainer',

        cls: ['main-container'],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: MainContainerController,

        stateProvider: MainContainerStateProvider,

        createEventButton: null,


        /**
         * @member {Object[]} items
         */
        items: [
            {
                module: Toolbar,
                style : {
                    marginBottom: '10px'
                },
                items : [
                    {
                        text   : 'Forums',
                        handler: 'onForumsClick'
                    },
                    {
                        text: 'Routes'
                    },
                    '->',
                    {
                        module   : Button,
                        handler  : 'createDialog',
                        iconCls  : 'fa fa-window-maximize',
                        reference: 'create-dialog-button',
                        text     : 'Create Event',
                    }
                ],
                flex  : 'none'
            },
            {
                module: GridContainer,

                listeners: {
                    cellClick: function (data) {

                        // We use the Target Classes to decide what to do.
                        let targetclasses = data.data.target.cls;
                        if (targetclasses[2] === 'delete-button') {
                            //TODO We need to work on a delete method.
                            console.log("Delete the record:  " + data.record.id);
                        } else if (targetclasses[2] === 'edit-button') {
                            console.log("Edit the record : " + data.record.id);
                            let dialog = null;
                            if (this.getController().component.dialog != null) {
                                dialog = this.getController().component.dialog;
                            } else {
                                console.log("Need to create the Dialog");
                                dialog = this.getController().createDialog(this.getController());
                            }
                            // if dialog was set we use it an load the data into it.
                            if (dialog) {
                                const form = dialog.getReference('main-form');
                                const json = data.record.toJSON();
                                form.setValues({event: [json]});
                                dialog.show();
                            }

                        }
                    }
                },
                bind     : {
                    store: 'stores.eventStore'
                },
                columns  : [
                    {
                        dataField: 'name',
                        text     : 'Event',
                        width    : 250
                    },
                    {
                        dataField: 'start_time',
                        text     : 'Date',
                        width    : 100,
                    },
                    {
                        dataField: 'user_name',
                        text     : 'Leader',
                        width    : 180,
                        renderer : (value) => {
                            return 'Ben Easley';
                        }
                    },
                    {
                        dataField: 'count',
                        text     : 'Going',
                        width    : 75,
                        renderer : (value) => {
                            return '5';
                        }
                    },

                    {
                        dataField: 'technical_rating',
                        text     : 'Rating',
                        width    : 75
                    },
                    {
                        dataField: 'max_rigs',
                        text     : 'Allowed',
                        width    : 75
                    },
                    {
                        dataField: 'waitlist_limit',
                        text     : 'Limit',
                        width    : 75
                    },
                    {
                        dataField: 'gpx_file_url',
                        text     : 'Route URL',
                        width    : 88,
                        // renderer: 'gpxrenderer'
                        renderer({value}) {
                            if (!value) {
                                return '';
                            }
                            return '<a href="' + value + '" target="_blank">Route</a>';
                        }
                    },

                    {
                        dataField: 'category_id',
                        text     : 'Category',
                        width    : 150,
                        //   renderer : 'categoryRenderer',

                        renderer({value}) {
                            //var me = this;
                            let categoryStore = this.getStateProvider().getStore('categories');
                            let thecat = null;

                            if (categoryStore) {
                                thecat = categoryStore.get(value);
                            }
                            if (thecat) {
                                return thecat.name;
                            }

                            return '';

                        }

                    },

                    {
                        dataField   : 'is_public',
                        text        : 'Public',
                        width       : 80,
                        renderer: (col) => {
                            if (col.value)
                                return 'Public';
                            else
                                return 'Private'
                        }
                    },
                    {
                        dataField   : 'children_permitted',
                        text        : 'Children',
                        width       : 80,
                        renderer: (col) => {

                            if (col.value)
                                return 'YES';
                            else
                                return 'NO'
                        }
                    },
                    {
                        dataField   : 'dogs_permitted',
                        text        : 'Dogs',
                        width       : 80,
                        renderer: (col) => {
                            if (col.value)
                                return 'YES';
                            else
                                return 'NO'
                        }
                    },

                    {
                        dataField: 'recommended_vehicle',
                        text     : 'Recommended',
                        width    : 200
                    },

                    {
                        dataField: 'communications',
                        text     : 'Comms',
                        width    : 200
                    },
                    {
                        dataField: 'meetup_location',
                        text     : 'Meet At',
                        width    : 200
                    },
                    {
                        dataField: 'meetup_time',
                        text     : 'Time',
                        width    : 150
                    },
                    {
                        dataField: 'permits_fees',
                        text     : 'Fees',
                        width    : 150
                    },

                    {
                        text     : 'More Actions',
                        dataField: 'id',  // Usually reference the record ID
                        renderer : function (value, record, columnIndex, rowIndex) {
                            // Return HTML for action buttons
                            return [
                                '<div class="action-buttons">',
                                '<i class="fa fa-edit edit-button" style="cursor:pointer; margin-right:10px;"></i>',
                                '<i class="fa fa-trash delete-button" style="cursor:pointer;"></i>',
                                '</div>'
                            ].join('');
                        },
                        width    : 100,
                        align    : 'center'
                    },

                    {
                        dataField: 'joinfield', text: 'Action',
                        width    : 100,
                        component: {
                            module : Button,
                            handler: 'joinButtonHandler',
                            text   : 'Join'
                        }
                    }
                ]
            }

        ],

        /*
         * @member {Object} layout={ntype:'fit'}
         */
        layout: {ntype: 'vbox', align: 'stretch'},
        style : {
            padding: '50px',
        }
    }


    /**
     * Once it is rendered lets call out init
     */
    afterRender() {
        super.afterRender();
        this.init(); // Call out init Method below
    }

    /**
     * We will create the Single Dialog for Edit and Create Event
     */
    init() {
        let me = this;
        me.getController().createDialogFromInit();
    }

}

export default Neo.setupClass(MainContainer);