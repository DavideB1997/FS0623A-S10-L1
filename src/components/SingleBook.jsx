import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea';

class SingleBook extends Component {
	state = {
		selected: false,
		selectedAsin: undefined,
	};

	handleCardClick = () => {
		const { book, onSelectedAsinChange } = this.props;

		this.setState(
			{
				selected: !this.state.selected,
				selectedAsin: book.asin,
			},
			() => {
				console.log(book.asin);
				onSelectedAsinChange(this.state.selectedAsin);
			}
		);
	};

	render() {
		return (
			<>
				<Card
					onClick={this.handleCardClick}
					style={{ border: this.state.selected ? '3px solid red' : 'none' }}
				>
					<Card.Img variant='top' src={this.props.book.img} />
					<Card.Body>
						<Card.Title style={{ color: 'black' }}>
							{this.props.book.title}
						</Card.Title>
					</Card.Body>
				</Card>
			</>
		);
	}
}

export default SingleBook;
