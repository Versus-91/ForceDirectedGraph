/* global Promise, fetch, window, cytoscape, document, tippy, _ */

Promise.all([
  fetch("style.json").then(function (res) {
    return res.json();
  }),
  fetch("data.json").then(function (res) {
    return res.json();
  }),
]).then(function (dataArray) {
  
  const cy = (window.cy = cytoscape({
    container: document.getElementById("cy"),
    style: dataArray[0],
    elements: dataArray[1],
    layout: { name: "random" },
  }));

  var params = {
    name: "cola",
    nodeSpacing: 5,
    edgeLength: 200,
    animate: true,
    randomize: false,
    maxSimulationTime: 1500,
  };
  
  cy.layout(params).run();

  cy.on("tap", function (e) {
    
  });

  cy.on("tap", "edge", function (e) {
    
  });

  cy.on("zoom pan", function (e) {
    
  });

  cy.nodes().forEach(function (n) {
    n.on("click", function (e) {
      console.log(e)
    });
  });

});
