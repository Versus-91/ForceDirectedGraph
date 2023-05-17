// This is your playground!
// Add functionality to your html controls, play with cytoscape's events and make those magic lenses!

/* global fetch, cytoscape */
import _style from "/style.js";

// returns true if the point "p" is inside the circle defined by "c" (center) and "r" (radius)
function isInCircle(c, r, p) {
  return Math.pow(p.x - c.x, 2) + Math.pow(p.y - c.y, 2) <= Math.pow(r, 2) 
}

fetch("data/data.json")
  .then((res) => res.json())
  .then((data) => {
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

    cy.on("mousemove", "node", function (e) {
      // HINT: use the "isInCircle" function defined above to calculate whether a node is inside the lens!
      
      
      const mouse = { x: e.originalEvent.x, y: e.originalEvent.y };
      console.log(`Mouse position: [x: ${mouse.x}, y: ${mouse.y}]`);
      
      cy.nodes().forEach((n) => {
        const node = n.renderedPosition(); // Careful: other position functions may invoke different coordinate systems
        // console.log(`Node position: [x: ${node.x}, y: ${node.y}]`);
      });
    });

    cy.on("mouseout", "node", function (e) {
      e.target.removeClass("magic");
    });

    cy.on("tap", "edge", function (e) {});
    cy.on("zoom pan", function (e) {});
  
  });
