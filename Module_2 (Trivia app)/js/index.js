var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var questions = [
{
  question: 'What is 8 X 2?',
  options: [5, 16, 12, 18],
  answer: 16 },

{
  question: 'What is 18 / 3?',
  options: [6, 10, 7, 5],
  answer: 6 },

{
  question: 'What is 3 X 2?',
  options: [5, 16, 6, 10],
  answer: 6 },

{
  question: 'What is 5 X 0?',
  options: [0, 5, 10, 6],
  answer: 0 },

{
  question: 'What is 11 X 11?',
  options: [121, 144, 112, 120],
  answer: 121 },

{
  question: 'What is 12 X 6?',
  options: [68, 82, 72, 56],
  answer: 72 },

{
  question: 'What is 89 X 2?',
  options: [186, 192, 178, 155],
  answer: 178 },

{
  question: 'What is 56 / 2?',
  options: [18, 32, 26, 28],
  answer: 28 },

{
  question: 'What is 8 X 3?',
  options: [32, 18, 24, 21],
  answer: 24 },

{
  question: 'What is 9 X 8?',
  options: [81, 72, 64, 68],
  answer: 72 }];



function Question(props) {
  return (
    React.createElement('div', null,
      React.createElement('h2', { className: 'question' }, props.question)));


}

function Option(props) {
  return (
    React.createElement('div', null,
      React.createElement('button', { className: 'btn btn-light btn-lg btn-block mb-2', type: 'button', onClick: function onClick() {props.onClick();} }, props.option)));


}

function Options(props) {
  var options = props.options.map(function (option) {return React.createElement(Option, { key: option, option: option, onClick: function onClick() {props.onClick(option);} });});
  return (
    React.createElement('div', null,
      options));


}

function AnswerResult(props) {
  return (
    React.createElement('div', { className: 'result row' },
      React.createElement('div', { className: 'col-md-6' },
        React.createElement('div', { className: 'card bg-success text-light' },
          React.createElement('div', { className: 'card-body' },
            React.createElement('h6', { className: 'card-title' }, 'Correct Answers'),
            React.createElement('h1', null, props.correctAnswers)))),



      React.createElement('br', null),
      React.createElement('div', { className: 'col-md-6' },
        React.createElement('div', { className: 'card bg-danger text-light' },
          React.createElement('div', { className: 'card-body' },
            React.createElement('h6', { className: 'card-title' }, 'Incorrect Answers'),
            React.createElement('h1', null, props.incorrectAnswers))))));





}var

TriviaApp = function (_React$Component) {_inherits(TriviaApp, _React$Component);
  function TriviaApp(props) {_classCallCheck(this, TriviaApp);var _this = _possibleConstructorReturn(this, (TriviaApp.__proto__ || Object.getPrototypeOf(TriviaApp)).call(this,
    props));
    _this.state = {
      questions: questions,
      correctAnswers: 0,
      incorrectAnswers: 0,
      questionNumber: 0 };

    _this.handleClick = _this.handleClick.bind(_this);return _this;
  }_createClass(TriviaApp, [{ key: 'isGameFinished', value: function isGameFinished()

    {
      return !this.state.questions[this.state.questionNumber];
    } }, { key: 'handleClick', value: function handleClick(

    selectedOption) {
      var questionInfo = this.state.questions[this.state.questionNumber];

      if (!this.isGameFinished()) {
        var sumCorrect = 0;
        var sumIncorrect = 0;
        if (selectedOption === questionInfo.answer) {
          sumCorrect++;
        } else {
          sumIncorrect++;
        }
        this.setState(function (prevState, props) {
          return {
            questionNumber: prevState.questionNumber + 1,
            correctAnswers: prevState.correctAnswers + sumCorrect,
            incorrectAnswers: prevState.incorrectAnswers + sumIncorrect };

        });
      }
    } }, { key: 'render', value: function render()

    {
      var questionInfo = void 0;
      var gameIsActive = !this.isGameFinished();
      if (gameIsActive) {
        questionInfo = this.state.questions[this.state.questionNumber];
      } else {
        questionInfo = this.state.questions[this.state.questions.length - 1];
      }
      return (
        React.createElement('div', { className: 'row' },
          React.createElement('div', { className: 'col-md-12 border rounded p-5 mt-1 text-center' },
            React.createElement(Question, { question: questionInfo.question }),
            React.createElement(Options, { options: questionInfo.options, onClick: this.handleClick })),

          !gameIsActive && React.createElement('div', null, React.createElement('h2', null, 'End of the game!')),
          React.createElement('div', { className: 'col-md-12 border rounded ml-1 text-center p-5 mt-1' },
            React.createElement(AnswerResult, { correctAnswers: this.state.correctAnswers, incorrectAnswers: this.state.incorrectAnswers }))));



    } }]);return TriviaApp;}(React.Component);


ReactDOM.render(
React.createElement(TriviaApp, null),
document.getElementById('root'));