import React from 'react';
import './css/card.css';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const PlayCard = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding : 8px;
    margin-bottom: 8px;
    background-color : white;
    width: 120px;
    `;

const CardTitle = styled.div`
    border: 1px solid lightgrey;
    margin-bottom: 8px;
    background-color : white;
    text-align:center;
    `;

const CardImage = styled.div`
    margin-bottom: 8px;
    background-color : white;
    margin: auto;
    width: 55%;
`;

const CardStats = styled.div`
    text-align:center;
    `;

export default class Card extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.card.id} index={this.props.index}>
                {(provided) => (
                    <PlayCard
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <CardTitle>
                            {this.props.card.content}
                        </CardTitle>
                        <CardImage>
                            <img src={this.props.card.picture} />
                        </CardImage>
                        <CardStats>
                            <ul>
                            <li>{this.props.card.attack}</li>
                            <li>{this.props.card.armor}</li>
                            <li>{this.props.card.health}</li>
                            </ul>
                        </CardStats>
                    </PlayCard>
                )}
            </Draggable>
        );
    }
}