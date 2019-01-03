var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // Lists of activities and restrictions
var optionsList = ['Science Lab', 'Swimming', 'Cooking', 'Painting'];
var checkList = [{ id: 'a', text: 'Dietary Restrictions' },
{ id: 'b', text: 'Physical Disabilities' },
{ id: 'c', text: 'Medical Needs' }];
// First Name and LastName component
function NameInput(props) {
  return (
    React.createElement('div', { className: 'form-group' },
      React.createElement('label', null, props.label),
      React.createElement('br', null),
      React.createElement('input', { type: 'text', name: props.name, className: 'form-control', value: props.value, onChange: props.handleChange })));


}
// List of activities componnt
function SelectList(props) {
  return (
    React.createElement('div', { className: 'my-1 mr-2' },
      React.createElement('label', null, props.label),
      React.createElement('br', null),
      React.createElement('select', { className: 'custom-select mr-sm-2', name: props.name, value: props.value, onChange: props.handleChange },
        props.optionsList.map(function (item, index) {return (
            React.createElement('option', { key: index, value: item }, ' ', item, ' '));}))));



}
// CheckBox list component
function CheckBox(props) {
  return (
    React.createElement('p', { className: 'form-check' },
      React.createElement('input', { className: 'form-check-input', type: 'checkbox', name: props.name, id: props.id, value: props.value, checked: props.checked, onChange: props.handleChange }),
      React.createElement('label', { className: 'form-check-label' }, props.value, ') ', props.label)));


}
// CheckbBoxList component
function CheckBoxList(props) {
  return (
    React.createElement('div', null,
      React.createElement('label', null, props.title),
      React.createElement('ol', null,
        props.checkList.map(function (item, index) {return (
            React.createElement(CheckBox, {
              key: index,
              id: props.id + '_' + index,
              name: props.id,
              value: item.id,
              checked: props.applyList.indexOf(item.id) < 0 ? false : true,
              label: item.text,
              handleChange: props.handleChange }));}))));





}
// Remove button component
function RemoveButton(props) {
  return (
    React.createElement('button', { onClick: function onClick(e) {props.removeItem(props.index);} }, React.createElement('i', { className: 'material-icons' }, 'delete')));

}
// Report element
function ReportElem(props) {
  debugger;
  return (
    React.createElement('tbody', null,
      props.reportList.map(function (item, index) {return (
          React.createElement('tr', { key: index },
            React.createElement('td', null, React.createElement(RemoveButton, { removeItem: props.removeItem, index: index })),
            React.createElement('td', null, item.firstName),
            React.createElement('td', null, item.lastName),
            React.createElement('td', null, item.activity),
            React.createElement('td', null, item.apply)));})));




}
// Report table
function ReportTable(props) {
  return (
    React.createElement('table', { className: 'table' },
      React.createElement('thead', { className: 'thead-light' },
        React.createElement('tr', null,
          React.createElement('th', { scope: 'col' }, 'Remove'),
          React.createElement('th', { scope: 'col' }, 'First Name'),
          React.createElement('th', { scope: 'col' }, 'Last Name'),
          React.createElement('th', { scope: 'col' }, 'Activity'),
          React.createElement('th', { scope: 'col' }, 'Restrictions'))),


      React.createElement(ReportElem, { removeItem: props.removeItem, reportList: props.reportList })));


}var

App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      firstName: '',
      lastName: '',
      activity: _this.props.optionsList[0],
      apply: [],
      items: [] };return _this;

  }
  // Handle multiple inputs
  _createClass(App, [{ key: 'handleChange', value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
    // Handle CheckList changes
  }, { key: 'handleChangeChk', value: function handleChangeChk(event) {
      var itemsCopy = this.state.apply;
      if (event.target.checked) {
        itemsCopy.push(event.target.value);
      } else {
        console.log(itemsCopy.indexOf(event.target.value));
        itemsCopy.splice(itemsCopy.indexOf(event.target.value), 1);
      }
      this.setState({ apply: itemsCopy });
    }
    // Add new item to the report and refresh the initial state
  }, { key: 'addItem', value: function addItem() {
      var itemsCopy = JSON.parse(JSON.stringify(this.state.items));
      itemsCopy.push({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        activity: this.state.activity,
        apply: this.state.apply.join(',') });

      this.setState({
        firstName: '',
        lastName: '',
        activity: this.props.optionsList[0],
        apply: [],
        items: itemsCopy });

    } }, { key: 'removeItem', value: function removeItem(

    index) {
      var itemsCopy = this.state.items.slice();
      itemsCopy.splice(index, 1);
      this.setState({ items: itemsCopy });
    } }, { key: 'render', value: function render()


    {var _this2 = this;
      console.log(this.state);
      return (
        React.createElement('div', null,
          React.createElement(NameInput, { label: 'First Name', value: this.state.firstName, name: 'firstName', handleChange: this.handleChange.bind(this) }),
          React.createElement(NameInput, { label: 'Last Name', value: this.state.lastName, name: 'lastName', handleChange: this.handleChange.bind(this) }),
          React.createElement(SelectList, { label: 'Select Activity', name: 'activity', optionsList: this.props.optionsList, value: this.state.activity, handleChange: this.handleChange.bind(this) }),
          React.createElement(CheckBoxList, { title: 'Check all that apply', name: 'apply', checkList: this.props.checkList, applyList: this.state.apply, handleChange: this.handleChangeChk.bind(this) }),
          React.createElement('button', { className: 'btn btn-outline-primary', onClick: function onClick() {return _this2.addItem();} }, 'Submit'),
          this.state.items.length > 0 && React.createElement(ReportTable, { removeItem: this.removeItem.bind(this), reportList: this.state.items })));


    } }]);return App;}(React.Component);


ReactDOM.render(
React.createElement(App, { optionsList: optionsList, checkList: checkList }),
document.getElementById('root'));