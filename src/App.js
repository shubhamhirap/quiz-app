import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import QuizPage from './page/QuizPage';
import HomePage from "./page/HomePage"

function App() {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={HomePage} />
        <Route path="/quiz" component={QuizPage} />
      </div>
    </Router>
  );
}

export default App;
