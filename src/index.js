import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Hand from './hand';
import styled from 'styled-components';
import io from "socket.io-client";
import { playerTurn } from './api';
import {checkTurn} from './api';

let myTurn = true;
const Container = styled.div`
    display:flex;
    `;

class App extends React.Component {
    
    state = initialData;
    
    
    onDragEnd = result => {
        const { destination, source, draggableId } = result;
        //myTurn = checkTurn();
        if (!myTurn){
            return;
        }
        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if (start === finish) {
            const newCardIds = Array.from(start.cardIds);
            newCardIds.splice(source.index, 1);
            newCardIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...start,
                cardIds: newCardIds,
            }

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn,
                },
            };

            this.setState(newState);
            return;
        }

        const startCardIds = Array.from(start.cardIds);
        startCardIds.splice(source.index,1)
        const newStart = {
            ...start,
            cardIds: startCardIds,
        };

        const finishCardIds = Array.from(finish.cardIds);
        finishCardIds.splice(destination.index,0,draggableId);
        const newFinish = {
            ...finish,
            cardIds: finishCardIds,
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        playerTurn();
        this.setState(newState);
        myTurn = false;
        return;
    };

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Container>
                    {this.state.columnOrder.map((columnId) => {
                        const hand = this.state.columns[columnId];
                        const cards = hand.cardIds.map(cardId => this.state.cards[cardId]);
                        

                        return <Hand key={hand.id} hand={hand} cards={cards} />;
                    })}
                </Container>
                This is the timer value: {this.state.timestamp}
            </DragDropContext>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));


