const validate = (userDetails) => {
    let errors = {};
    const {name, email,surveyTopic,feedBack,technology,health,education } = userDetails;
  
    if (!name) {
      errors.name = "Full Name is required";
    }
  
  
  
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      errors.email = "Email is invalid";
    }

    if(!surveyTopic){
      errors.surveyTopic = "Topic For survey is required"
    }

    if(!feedBack){
      errors.feedBack = "please enter feedback"
    }
    else if(feedBack.length < 50){
      errors.feedBack = "Feedback should be of atleast 50 characters"
    }

    if(surveyTopic){
      if(surveyTopic === "technology"){
        if(!technology.favouriteProgramming){
          errors.favouriteProgramming = "Please Select One Programming Language"
        }
        if(technology.yearOfExperience <= 0){
          errors.yearOfExperience = "Year of Experience should be greater than zero"
        }
      }

      else if(surveyTopic === "health"){
        if(!health.excersiceFrequency){
          errors.excersiceFrequency = "Please Select your Excersice Frequency"
        }
        if(!health.dietPrefrence){
          errors.dietPrefrence = "Please Select your Diet Prefrence"
        }
      }

      else if(surveyTopic === "education"){
        if(!education.highestQualification){
          errors.highestQualification = "Please Select your Highest Qualification"
        }
        if(!education.fieldOfStudy){
          errors.fieldOfStudy = "Please Enter your Field Of Study"
        }
      }
    }
  
  
  
    // if (!values.phoneNumber) {
    //   errors.phoneNumber = "phoneNumber is required";
    // } else if (values.phoneNumber.toString().length !== 10) {
    //   errors.phoneNumber = "Phone Number must be of 10 numbers (IN)";
    // }
  
  
  
    
    return errors;
  };
  
  export default validate;
  