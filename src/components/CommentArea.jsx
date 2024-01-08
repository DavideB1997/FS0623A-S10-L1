import { Component } from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';
import Error from './Error';
import Loading from './Loading';

class CommentArea extends Component {
	state = {
		comments: [],
		isLoading: true,
		isError: false,
	};

	async RecuperaCommenti() {
		try {
			let response = await fetch(
				'https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,
				{
					headers: {
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZjhkYWUwZGQxZDAwMTgyZDE3MjQiLCJpYXQiOjE3MDQ3MjA2MDIsImV4cCI6MTcwNTkzMDIwMn0.qTRjIH9peI8X0FYehiKU25dxWhm2ejhEYDh28XEV43o',
					},
				}
			);
			console.log(response);
			if (response.ok) {
				let comments = await response.json();
				console.log(comments);
				this.setState({ comments: comments, isLoading: false, isError: false });
			} else {
				console.log('error');
				this.setState({ isLoading: false, isError: true });
			}
		} catch (error) {
			console.log(error);
			this.setState({ isLoading: false, isError: true });
		}
	}

	componentDidMount() {
		this.RecuperaCommenti();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.asin !== this.props.asin) {
			this.RecuperaCommenti();
		}
	}

	render() {
		return (
			<div className='text-center'>
				{this.props.asin !== '' && (
					<>
						{this.state.isLoading && <Loading />}
						{this.state.isError && <Error />}
						<CommentList commentsToShow={this.state.comments} />
						<AddComment asin={this.props.asin} />
					</>
				)}
			</div>
		);
	}
}

export default CommentArea;
