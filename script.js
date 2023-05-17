/* global Promise, fetch, window, cytoscape */

Promise.all([
  fetch("data/style.json").then(res => res.json()),
  fetch("data/data.json").then(res => res.json()),
]).then(function (data) {
  const cy = cytoscape({
    container: document.getElementById("cy"),
    style: data[0], 
    elements: data[1],
    layout: {
      name: "cola",
      nodeSpacing: 5,
      edgeLength: 200,
      animate: true,
      randomize: false,
      maxSimulationTime: 1500,
    },
  });

  cy.on("tap", function (e) {});

  cy.on("tap", "edge", function (e) {});

  cy.on("zoom pan", function (e) {});

});
