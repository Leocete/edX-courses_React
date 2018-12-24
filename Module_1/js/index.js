function MainTitle(props) {
  return (
    React.createElement("div", null,
      React.createElement("h2", null, props.title),
      React.createElement("p", null, props.description)));


}

function ChooseOptions(props) {
  return (
    React.createElement("div", { "class": "filterVehicles" },
      React.createElement("input", { type: "checkbox", id: "newOnly", name: "filter", value: "newOnly" }),
      React.createElement("label", { "for": "newOnly" }, "New Only"), React.createElement("br", null),
      React.createElement("p", null, "Select Type",
        React.createElement("select", { name: "vehicles" },
          React.createElement("option", { value: "item1" }, props.vehicleType[0]),
          React.createElement("option", { value: "item2" }, props.vehicleType[1]),
          React.createElement("option", { value: "item3" }, props.vehicleType[2]),
          React.createElement("option", { value: "item4" }, props.vehicleType[3])))));




}

function TableElement(props) {
  return (
    React.createElement("div", null,
      React.createElement("table", null,
        React.createElement("tr", null,
          React.createElement("th", null, "Year"),
          React.createElement("th", null, "Model"),
          React.createElement("th", null, "Price"),
          React.createElement("th", null, "Buy")),

        React.createElement("tr", null,
          React.createElement("td", null, props.parameters[0]),
          React.createElement("td", null, props.parameters[1]),
          React.createElement("td", null, props.parameters[2]),
          React.createElement("td", null, React.createElement("button", { type: "button" }, "Buy Now"))))));




}

function TitleName(props) {
  return React.createElement("h2", null, "Title");
}

function CarApp(props) {
  return (
    React.createElement("div", { "class": "wrapper" },
      React.createElement(MainTitle, { title: "Welcome to React Transportation", description: "The best place to buy vehicles online" }),
      React.createElement(ChooseOptions, { vehicleType: ["All", "Cars", "Trucks", "Convertibles"] }),
      React.createElement(TitleName, { name: "Cars" }),
      React.createElement(TableElement, { parameters: [2013, "A", "$32000"] }),
      React.createElement(TableElement, { parameters: [2011, "B", "$4400"] }),
      React.createElement(TableElement, { parameters: [2016, "B", "$15500"] }),
      React.createElement(TitleName, { name: "Trucks" }),
      React.createElement(TableElement, { parameters: [2014, "D", "$18000"] }),
      React.createElement(TableElement, { parameters: [2013, "E", "$5200"] }),
      React.createElement(TitleName, { name: "Convertibles" }),
      React.createElement(TableElement, { parameters: [2009, "F", "$2000"] }),
      React.createElement(TableElement, { parameters: [2010, "G", "$6000"] }),
      React.createElement(TableElement, { parameters: [2012, "H", "$12500"] }),
      React.createElement(TableElement, { parameters: [2017, "M", "$50000"] })));


}


ReactDOM.render(
React.createElement(CarApp, null),
document.getElementById("root"));