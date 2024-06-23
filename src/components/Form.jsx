import React, { useContext, useState } from "react";
import useForm from "../Hooks/useForm.js";
import validate from "../Utils/validate.js";
import "../App.css";
import Modal from "./Modal.jsx";
import FromContext from "../Context/formContext.js";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const { userDetails, setUserDetails} = useContext(FromContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { errors, handleChange, handleSubmit } = useForm(
    userDetails,
    setUserDetails,
    validate,
    setIsModalOpen
  );

  const { surveyTopic } = userDetails;

    const closeModal = () => {
      setIsModalOpen(false);
      navigate("/SurveyQuestions")
    };



  return (
    <>
      <h1 className="heading">Task/Level - 3</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div>
            <label>Survey Topic</label>
            <select
              name="surveyTopic"
              value={userDetails.surveyTopic}
              onChange={handleChange}
            >
              <option value="">Select Survey Topic</option>
              <option value="technology">Technology</option>
              <option value="health">Health</option>
              <option value="education">Education</option>
            </select>
            {errors.surveyTopic && <p>{errors.surveyTopic}</p>}
          </div>

          {surveyTopic && surveyTopic === "technology" && (
            <>
              <div>
                <label>Favorite Programming Language</label>
                <select
                  name="technology.favouriteProgramming"
                  value={userDetails[surveyTopic].favouriteProgramming}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Favorite Programming Language{" "}
                  </option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="CSharp">c#</option>
                </select>
                {errors.favouriteProgramming && (
                  <p>{errors.favouriteProgramming}</p>
                )}
              </div>

              <div>
                <label>Year Of Experience</label>
                <input
                  type="number"
                  name="technology.yearOfExperience"
                  value={userDetails[surveyTopic].yearOfExperience}
                  onChange={handleChange}
                />
                {errors.yearOfExperience && <p>{errors.yearOfExperience}</p>}
              </div>
            </>
          )}

          {surveyTopic && surveyTopic === "health" && (
            <>
              <div>
                <label>Exercise Frequency</label>
                <select
                  name="health.excersiceFrequency"
                  value={userDetails[surveyTopic].excersiceFrequency}
                  onChange={handleChange}
                >
                  <option value="">Select Excersice Frequency </option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                </select>
                {errors.excersiceFrequency && (
                  <p>{errors.excersiceFrequency}</p>
                )}
              </div>

              <div>
                <label>Diet Prefrence</label>
                <select
                  name="health.dietPrefrence"
                  value={userDetails[surveyTopic].dietPrefrence}
                  onChange={handleChange}
                >
                  <option value="">Select Diet Prefrence </option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="NonVegetarian">Non-Vegetarian</option>
                </select>
                {errors.dietPrefrence && <p>{errors.dietPrefrence}</p>}
              </div>
            </>
          )}

          {surveyTopic && surveyTopic === "education" && (
            <>
              <div>
                <label>Highest Qualification</label>
                <select
                  name="education.highestQualification"
                  value={userDetails[surveyTopic].highestQualification}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Highest Qualification{" "}
                  </option>
                  <option value="HighSchool">High School</option>
                  <option value="Bachelors">Bachelor's</option>
                  <option value="Masters">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
                {errors.highestQualification && (
                  <p>{errors.highestQualification}</p>
                )}
              </div>

              <div>
                <label>Field of Study</label>
                <input
                  type="text"
                  name="education.fieldOfStudy"
                  value={userDetails[surveyTopic].fieldOfStudy}
                  onChange={handleChange}
                />
                {errors.fieldOfStudy && <p>{errors.fieldOfStudy}</p>}
              </div>
            </>
          )}

          <div>
            <label>FeedBack</label>
            <textarea
              type="text"
              name="feedBack"
              value={userDetails.feedBack}
              onChange={handleChange}
            />
            {errors.feedBack && <p>{errors.feedBack}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default Form;
