import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import FromContext from "../Context/formContext";
import "../App.css";
import { ColorRing } from 'react-loader-spinner'

const SurveyQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading,setLoading] = useState(true);
  const { userDetails } = useContext(FromContext);
  const { surveyTopic } = userDetails;

  const fields = userDetails[surveyTopic];

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const { data } = await axios.post(
          "https://survey-api-flax.vercel.app/getSurveyQuestions",
          {
            surveyTopic,
            fields,
          }
        );
        setQuestions(data.questions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching survey questions:", error);
      }
    };

    getQuestions();
  }, [surveyTopic, fields]);

  return (
    loading ? (
      <div className="loading-spinner">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    ) : (
      <div className="survey-questions">
        <h2>Survey Questions</h2>
        <ol>
          {questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ol>
      </div>
    )
  );
  
};

export default SurveyQuestions;
