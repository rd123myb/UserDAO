import React, {Component} from 'react';
import './App.css';
import "survey-react/survey.css"
import * as survey from 'survey-react'

class App extends Component{
  constructor(props){
    super(props)
    this.state ={

    }
    this.onCompleteComponent = this.onCompleteComponent.bind(this)
  }
onCompleteComponent = () => {
  this.setState({
    isCompleted: true
  })
}

render(){

  var json = {
    "completedHtml": "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great product!</h5>",
    "completedHtmlOnCondition": [
        {
            "expression": "{nps_score} > 8",
            "html": "<h3>Thank you for your feedback.</h3> <h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>"
        }, {
            "expression": "{nps_score} < 7",
            "html": "<h3>Thank you for your feedback.</h3> <h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br/>"
        }
    ],
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "rating",
                    "name": "nps_score",
                    "title": "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
                    "isRequired": true,
                    "rateMin": 0,
                    "rateMax": 10,
                    "minRateDescription": "(If anything, I would say dont buy it)",
                    "maxRateDescription": "(I definatley would)"
                }, {
                    "type": "checkbox",
                    "name": "promoter_features",
                    "visibleIf": "{nps_score} >= 7",
                    "title": "What about this product did you like the most?",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "answercount",
                            "text": "Please select two features maximum.",
                            "maxCount": 2
                        }
                    ],
                    "hasOther": true,
                    "choices": [
                        "Performance", "Stability", "User Interface", "Complete Functionality, Speed, Mission, Security, Decentralization"
                    ],
                    "otherText": "Other feature:",
                    "colCount": 2
                }, {
                    "type": "comment",
                    "name": "passive_experience",
                    "visibleIf": "{nps_score} > 6  and {nps_score} < 9",
                    "title": "What is the primary reason for your score?"
                }, {
                    "type": "comment",
                    "name": "disappointed_experience",
                    "visibleIf": "{nps_score} notempty",
                    "title": "What do you miss and what was disappointing in your experience with us?"
                }
            ]
        }

    ],
    "showQuestionNumbers": "off"
};
  var surveyRender = !this.state.isCompleted ? (
    <survey.Survey
      json={json}
      showCompletedPage={false}
      onComplete={this.onCompleteComponent}
    />

  ) : null

  var onSurveyCompletion = this.state.isCompleted ? (
    <div>Thanks for completing this Survey for the UserDAO</div>
  ) : null;

  return (
    <div className="App">
      <div>{surveyRender}</div>
      <div>{onSurveyCompletion}</div>

    </div>
  );
}
}

export default App;
