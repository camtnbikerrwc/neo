
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
                        width : 200,
                    },
                    {
                        dataField : 'start_time',
                        text : 'Date',
                        width : 100,

                        renderer: function (value) {
                            if (!value) return '';

                            const str = String(value.value);
                            const date = new Date(str.replace(/\//g, '-')); // Ensure cross-browser safety

                            const formatted = `${(date.getMonth() + 1).toString().padStart(2, '0')}/` +
                                `${date.getDate().toString().padStart(2, '0')}/` +
                                `${date.getFullYear()}`;


                            return formatted;
                        }
                    },
                    {
                        dataField : 'user_name',
                        text : 'Leader',
                        width : 200,
                        cellRenderer: (value) => {
                            return 'Ben Easley';
                        }
                    },
                    {
                        dataField : 'count',
                        text : 'Going',
                        width : 100,
                        cellRenderer: (value) => {
                            return '5';
                        }
                    },

                    {
                        dataField : 'technical_rating',
                        text : 'Rating',
                        width : 100
                    },
                    {
                        dataField : 'max_rigs',
                        text : 'Allowed',
                        width : 100
                    },

                    {
                        dataField : 'category_id',
                        text : 'Category',
                        width : 200,
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
                        width: 100,
                        cellRenderer: (value) => {
                            if ( value)
                                return 'Public';
                            else
                                return 'Private'
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
                        text : 'Meetup',
                        width : 200
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