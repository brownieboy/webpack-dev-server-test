require("./css/app.css");

var React = require("react");
var CheckboxInput = require("./CheckboxInput.jsx");
var CheckboxInputField = require("./CheckboxInputField.jsx");
var CheckboxInputFields = require("./CheckboxInputFields.jsx");

var SurveyApp = React.createClass({
    getInitialState: function() {
        var questions = this.props.questions.slice();
        return {questions: questions};
    },
    render: function() {
        return (
            <CheckboxInputFields
                questions={this.state.questions}
                handleFieldChange={this.handleFieldChange} />
        );
    },
    handleFieldChange: function(questionIndex, elementIndex, checked) {
        // Update the state data.  If the element has been checked, then change the element's
        // corresponding data point's checked property to true.  (This will add the checked
        // property to that data point if it doesn't already exist.)  If the element has been
        // unchecked, then we'll delete that data point's checked element it it exists.
     
        var newStateQuestions = this.state.questions.slice();
        var elementCheckToUpdate = newStateQuestions[questionIndex].values[elementIndex];
        if(checked) {
            elementCheckToUpdate.checked = true;
        }
        else {
            if(typeof elementCheckToUpdate.checked !== undefined) {
                delete elementCheckToUpdate.checked;
            }
        }
        this.setState({questions: newStateQuestions});
    }
});

var questions = [{ name: "fruits",
                 blurb: "What fruits do you eat?",
                 values: [
                     {label: "Apples", value: "apples"},
                     {label: "Bananas", value: "bananas"},
                     {label: "Kiwi fruit", value: "kiwi"}
                     
                 ]
                }, 
                { name: "tvseries",
                blurb: "What TV series do you watch?",
                 values: [
                     {label: "The Walking Dead", value: "walkingdead"},
                     {label: "Game of Thrones", value: "gameofthrones"},
                     {label: "Breaking Bad", value: "breakingbad"},
                     {label: "The X-Files", value: "xfiles"}
                                     
                 ]
                },
               { name: "tvstreaming",
                blurb: "To which TV streaming services do you subscribe?",
                 values: [
                     {label: "Netflix", value: "netflix"},
                     {label: "Stan", value: "stan"},
                     {label: "Quickflix", value: "quickflix"},
                     {label: "Foxtel Go", value: "foxtelgo"}
                                     
                 ]
                }];


var checkBoxField = React.render(<SurveyApp questions={questions} />, document.getElementById("main"));



