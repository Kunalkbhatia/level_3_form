import "./App.css";
import FormContextProvider from "./Context/FormContextProvider.jsx";
import Form from "./components/Form.jsx";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import SurveyQuestions from "./components/SurveyQuestions.jsx";
function App() {
  return (
    <FormContextProvider>
      <Router>
        <Routes>
          <Route path="/" element = {<Form/>}/>
          <Route path="/SurveyQuestions" element = {<SurveyQuestions/>}/>
        </Routes>
      </Router>
    </FormContextProvider>
  );
}

export default App;
