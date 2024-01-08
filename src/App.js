import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import MyNav from './components/MyNav';
// import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap';
import BookList from './components/BookList';
import Main from './components/Main';

import CommentArea from './components/CommentArea';
import fantasy from './data/fantasy.json';

function App() {
	return (
		<Container>
			<MyNav />
			<MyJumbotron />
			{/* <AllTheBooks /> */}
			<Main></Main>

			<MyFooter />
		</Container>
	);
}

export default App;
