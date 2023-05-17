// This is your playground! 
// Add functionality to your html controls, play with cytoscape's events and make those magic lenses!

/* global Promise, fetch, window, cytoscape */
import _style from '/style.js';

fetch("data/data.json")
  .then(res => res.json())
  .then(function (data) {
  const cy = cytoscape({
    container: document.getElementById("cy"),
    style: _style, 
    elements: data,
    layout: {
      name: "cola",
      nodeSpacing: 5,
      edgeLength: 200,
      animate: true,
      randomize: false,
      maxSimulationTime: 1500,
    },
  });

  cy.on("mouseover", "node", function (e) {
    // HINT: use the "mousemove" event instead! 
    
    const mouse = e.position;
    console.log(`Mouse position: [x: ${mouse.x}, y: ${mouse.y}]`);
    const node = e.target.position();
    console.log(`Mouse position: [x: ${node.x}, y: ${node.y}]`);
    
    e.target.addClass('hovered');
  });
  
  cy.on("mouseout", "node", function (e) {    
    e.target.removeClass('hovered');
  });
  
  /*cy.on("mouseover", function (e) {
    // HINT: use the "mousemove" event instead!  
    
  });*/

  cy.on("tap", "edge", function (e) {});

  cy.on("zoom pan", function (e) {});

});
