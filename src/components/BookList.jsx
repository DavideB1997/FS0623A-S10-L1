import { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';

class BookList extends Component {
	state = {
		searchQuery: '',
		selectedAsin: undefined,
	};

	handleSelectedAsinChange = (selectedAsin) => {
		this.props.onNonnoSelectedAsinChange(selectedAsin);
	};

	render() {
		return (
			<>
				<Row>
					<Col>
						<Form.Group>
							<Form.Label>Search a book</Form.Label>
							<Form.Control
								type='text'
								placeholder='Search here'
								value={this.state.searchQuery}
								onChange={(e) => this.setState({ searchQuery: e.target.value })}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					{this.props.books
						.filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
						.map((b) => (
							<Col xs={12} md={4} key={b.asin}>
								<SingleBook
									book={b}
									onSelectedAsinChange={this.handleSelectedAsinChange}
									selectedAsinPadre={this.state.selectedAsin}
								/>
							</Col>
						))}
				</Row>
			</>
		);
	}
}

export default BookList;
