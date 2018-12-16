import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Card from './card';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius 2px;
    width: 164px;
    height: 100%

    display: flex;
    flex-direction: column;
    `;
const Title = styled.h3`
    padding: 8px;
    `;
const HandSpace = styled.div`
    padding: 8px
    flex-grow: 1;
    min-height: 100px;
    `;

export default class Hand extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.hand.title}</Title>
                <Droppable droppableId={this.props.hand.id}>
                    {provided => (
                        <HandSpace
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {this.props.cards.map((card,index) => (
                            <Card key={card.id} card={card} index={index}/>
                            ))}
                            {provided.placeholder}
                        </HandSpace>
                    )}
                </Droppable>
            </Container>
        );
    }

}