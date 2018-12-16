import axePic from './img/axePic.png'
import drowPic from './img/drowPic.png'
import tinkerPic from './img/tinkerPic.png'

const initialData = {
    cards:{
        'card-1' : {id: 'card-1', content: 'Axe', picture: axePic, attack: '5', health: '7', armor: '2'},
        'card-2' : {id: 'card-2', content: 'Drow', picture: drowPic, attack: '4', health: '4', armor: '0'},
        'card-3' : {id: 'card-3', content: 'Tinker', picture: tinkerPic, attack: '3', health: '6', armor: '1'}
    },
    columns:{
        'column-1':{
            id: 'column-1',
            title: 'My Hand',
            cardIds: ['card-1','card-2','card-3'],
        },
        'column-2':{
            id: 'column-2',
            title: 'Card Field',
            cardIds: [],
        },
    },

    columnOrder: ['column-1','column-2'],
};
export default initialData;