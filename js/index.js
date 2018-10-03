var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Display = function (_React$Component) {_inherits(Display, _React$Component);function Display() {_classCallCheck(this, Display);return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).apply(this, arguments));}_createClass(Display, [{ key: "render", value: function render()
    {
      return React.createElement("div", { className: "display" },
        React.createElement("h2", null,
          this.props.result));


    } }]);return Display;}(React.Component);var


ButtonsKey = function (_React$Component2) {_inherits(ButtonsKey, _React$Component2);function ButtonsKey() {_classCallCheck(this, ButtonsKey);return _possibleConstructorReturn(this, (ButtonsKey.__proto__ || Object.getPrototypeOf(ButtonsKey)).apply(this, arguments));}_createClass(ButtonsKey, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "buttons-key" },
          React.createElement("div", { className: "left" },
            React.createElement("button", { onClick: this.props.onClick, className: "button btnrg seven", value: "7" }, "7"),
            React.createElement("button", { onClick: this.props.onClick, className: "button btnrg eight", value: "8" }, "8"),
            React.createElement("button", { onClick: this.props.onClick, className: "button btnrg nine", value: "9" }, "9"),
            React.createElement("button", { onClick: this.props.onClick, className: "button btnrg four", value: "4" }, "4"),
            React.createElement("button", { onClick: this.props.onClick, className: "button btnrg five", value: "5" }, "5"),
            React.createElement("button", { onClick: this.props.onClick, className: "button btnrg six", value: "6" }, "6"),
            React.createElement("button", { onClick: this.props.onClick, className: "button btnrg one", value: "1" }, "1"),
            React.createElement("button", { onClick: this.props.onClick, className: "button btnrg two", value: "2" }, "2"),
            React.createElement("button", { onClick: this.props.onClick, className: "button btnrg three", value: "3" }, "3"),
            React.createElement("button", { onClick: this.props.onClick, className: "button btnrg zero", value: "0" }, "0"),
            React.createElement("button", { onClick: this.props.onClick, className: "button btnrg point", value: "." }, "."),
            React.createElement("button", { onClick: this.props.onClick, className: "button btnrg equal", value: "=" }, "=")),

          React.createElement("div", { className: "rigth" },
            React.createElement("button", { onClick: this.props.onClick, className: "button ce", value: "ce" }, "CE"),
            React.createElement("button", { onClick: this.props.onClick, className: "button slash", value: "/" }, "/"),
            React.createElement("button", { onClick: this.props.onClick, className: "button multi", value: "*" }, "x"),
            React.createElement("button", { onClick: this.props.onClick, className: "button minus", value: "-" }, "-"),
            React.createElement("button", { onClick: this.props.onClick, className: "button plus", value: "+" }, "+"))));


    } }]);return ButtonsKey;}(React.Component);var


App = function (_React$Component3) {_inherits(App, _React$Component3);
  function App(props) {_classCallCheck(this, App);var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this3.state = {
      result: '' };


    _this3.handleClick = _this3.handleClick.bind(_this3);return _this3;

  }_createClass(App, [{ key: "handleClick", value: function handleClick(

    event) {
      var value = event.target.value;
      var result = this.state.result;
      if (value === 'ce') {
        var stop = result.slice(0, result.length - 1);
        this.setState({ result: stop });
      } else if (value === "=") {
        var re = eval(result);
        if (re.toString().length >= 15) {
          re = re.toString().substring(0, 9);
          this.setState({ result: re });
        } else {
          this.setState({ result: re.toString() });
        }
      } else {
        this.setState({ result: result + value });
      }
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", { className: "container" },
          React.createElement(Display, { result: this.state.result }),
          React.createElement("div", { className: "buttons" },
            React.createElement(ButtonsKey, { onClick: this.handleClick }))));


    } }]);return App;}(React.Component);


ReactDOM.render(
React.createElement(App, null),
document.getElementById('root'));