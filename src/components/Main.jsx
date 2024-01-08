import { Component } from 'react';
import fantasy from '../data/fantasy.json';
import BookList from './BookList';
import CommentArea from './CommentArea';

class Main extends Component {
	state = {
		nonnoSelectedAsin: '',
	};

	handleNonnoSelectedAsinChange = (nonnoSelectedAsin) => {
		this.setState({ nonnoSelectedAsin });
		console.log('Selected Asin in Nonno:', nonnoSelectedAsin);
		// Puoi fare ulteriori operazioni con il valore di nonnoSelectedAsin qui, se necessario
	};

	render() {
		return (
			<div className='d-flex'>
				<div className='col-6'>
					<BookList
						books={fantasy}
						onNonnoSelectedAsinChange={this.handleNonnoSelectedAsinChange}
					/>
				</div>
				<div className='col-6'>
					<CommentArea asin={this.state.nonnoSelectedAsin} />
				</div>
			</div>
		);
	}
}

export default Main;
