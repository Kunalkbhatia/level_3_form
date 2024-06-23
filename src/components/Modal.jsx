import React, { useContext } from 'react'
import ReactModal from 'react-modal'
import FromContext from '../Context/formContext'

const Modal = ({isModalOpen,closeModal}) => {
const {userDetails} = useContext(FromContext);
const { name, email, surveyTopic, feedBack } = userDetails;
const specificDetails = userDetails[surveyTopic];
  return (
    <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Form Summary"
        className="modal-content"
        ariaHideApp={false}
      >
         <h2>Form Summary</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Survey Topic:</strong> {surveyTopic}</p>
        {surveyTopic && (
          <>
            {surveyTopic === "technology" && (
              <>
                <p><strong>Favorite Programming Language:</strong> {specificDetails.favouriteProgramming}</p>
                <p><strong>Year Of Experience:</strong> {specificDetails.yearOfExperience}</p>
              </>
            )}
            {surveyTopic === "health" && (
              <>
                <p><strong>Exercise Frequency:</strong> {specificDetails.excersiceFrequency}</p>
                <p><strong>Diet Preference:</strong> {specificDetails.dietPrefrence}</p>
              </>
            )}
            {surveyTopic === "education" && (
              <>
                <p><strong>Highest Qualification:</strong> {specificDetails.highestQualification}</p>
                <p><strong>Field Of Study:</strong> {specificDetails.fieldOfStudy}</p>
              </>
            )}
          </>
        )}
        <p><strong>Feedback:</strong> {feedBack}</p>
        <button onClick={closeModal}>Close</button>
      </ReactModal>
  )
}

export default Modal
