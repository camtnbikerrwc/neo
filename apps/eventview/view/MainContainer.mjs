
import MainContainerController    from './MainContainerController.mjs';
import MainContainerStateProvider from './MainContainerStateProvider.mjs';
import GridContainer               from '../../../src/grid/Container.mjs';
import Viewport                   from '../../../src/container/Viewport.mjs';
import Button                       from "../../../src/button/Base.mjs";
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

        createEventButton : null,
        /**
         * @member {Object[]} items
         */


        items: [
            {
                module: Toolbar,
                style : {
                    marginBottom : '10px'
                },
                items : [
                    {
                        text : 'Forums',
                        handler : 'onForumsClick'
                    },
                    {
                        text : 'Routes'
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
                flex : 'none'
            },
            {
                module: GridContainer,
                bind : {
                    store : 'stores.eventStore'
                },
                columns : [
                    {
                        dataField : 'name',
                        text : 'Event',
                        width : 250
                    },
                    {
                        dataField : 'start_time',
                        text : 'Date',
                        width : 100,
                    },
                    {
                        dataField : 'user_name',
                        text : 'Leader',
                        width : 180,
                        cellRenderer: (value) => {
                            return 'Ben Easley';
                        }
                    },
                    {
                        dataField : 'count',
                        text : 'Going',
                        width : 75,
                        cellRenderer: (value) => {
                            return '5';
                        }
                    },

                    {
                        dataField : 'technical_rating',
                        text : 'Rating',
                        width : 75
                    },
                    {
                        dataField : 'max_rigs',
                        text : 'Allowed',
                        width : 75
                    },
                    {
                        dataField : 'waitlist_limit',
                        text : 'Limit',
                        width : 75
                    },
                    {
                        dataField : 'gpx_file_url',
                        text : 'Route URL',
                        width : 200,
                        listeners     : {click: (cell) => {
                            console.log(cell);
                            }},
                    },

                    {
                        dataField : 'category_id',
                        text : 'Category',
                        width : 150,
                     //   renderer : 'categoryRenderer',

                        cellRenderer: (value) => {
                           switch(value.value){
                               case 13:
                                   return 'Overlanding';
                               case 14:
                                   return 'Rock Crawling';
                               case 15:
                                   return 'Scenic Driv';
                               case 16:
                                   return 'Night Run';

                            }
                        }

                    },

                    {
                        dataField: 'is_public',
                        text: 'Public',
                        width: 80,
                        cellRenderer: (col) => {
                            if ( col.value)
                                return 'Public';
                            else
                                return 'Private'
                        }
                    },
                    {
                        dataField: 'children_permitted',
                        text: 'Children',
                        width: 80,
                        cellRenderer: (col) => {

                            if ( col.value)
                                return 'YES';
                            else
                                return 'NO'
                        }
                    },
                    {
                        dataField: 'dogs_permitted',
                        text: 'Dogs',
                        width: 80,
                        cellRenderer: (col) => {
                            if ( col.value)
                                return 'YES';
                            else
                                return 'NO'
                        }
                    },

                    {
                        dataField : 'recommended_vehicle',
                        text : 'Recommended',
                        width : 200
                    },

                    {
                        dataField : 'communications',
                        text : 'Comms',
                        width : 200
                    },
                    {
                        dataField : 'meetup_location',
                        text : 'Meet At',
                        width : 200
                    },
                    {
                        dataField : 'meetup_time',
                        text : 'Time',
                        width : 150
                    },
                    {
                        dataField : 'permits_fees',
                        text : 'Fees',
                        width : 150
                    },

                    {dataField: 'edit',           text: 'Action',
                        width : 100,
                        component: {
                            module : Button,
                            handler: 'editButtonHandler',
                            text   : 'Join'
                        }}
                ]
            }

        ],

        /*
         * @member {Object} layout={ntype:'fit'}
         */
        layout: {ntype: 'vbox', align : 'stretch'},
        style : {
            padding: '50px',
        }
    }

}

export default Neo.setupClass(MainContainer);