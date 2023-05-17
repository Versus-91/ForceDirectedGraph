// This is your playground!
// Add functionality to your html controls, play with cytoscape's events and make those magic lenses!

/* global fetch, cytoscape */
import _style from "/style.js";

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

    /*cy.on("mouseover", "node", function (e) {
      // HINT: use the "mousemove" event instead!

      const mouse = e.position;
      //console.log(`Mouse position: [x: ${mouse.x}, y: ${mouse.y}]`);
      const node = e.target.position();
      //console.log(`Mouse position: [x: ${node.x}, y: ${node.y}]`);

      e.target.addClass("hovered");
    });*/

    cy.on("mouseout", "node", function (e) {
      e.target.removeClass("hovered");
    });

    cy.on("mousemove", function (e) {
      const lens = document.getElementById('lens')
      const mouse = {x: e.originalEvent.x, y: e.originalEvent.y};
      const radius = 40;
      
      
      lens.setAttribute('cx', mouse.x);
      lens.setAttribute('cy', mouse.y);
      //lens.setAttribute('transform', `translate(${mouse.x - radius}, ${mouse.y - radius})`);
      
      cy.nodes().forEach(n => {
        
        const node = n.renderedPosition();
        
        if (isInCircle(mouse, radius, node)) {
          n.addClass('hovered')
        }
        return ; 
      })
      
    });
    
    // returns true if "point" is inside the circle defined by "circleCenter" and "circleRadius"
    function isInCircle(circleCenter, circleRadius, point) {
      //console.log(point)
      //console.log(circleCenter)
      //console.log(circleRadius)
      console.log(Math.pow(point.x - circleCenter.x, 2) + Math.pow(point.y - circleCenter.y, 2))
      console.log(Math.pow(circleRadius, 2))
      
      return 
        Math.pow(point.x - circleCenter.x, 2) + 
        Math.pow(point.y - circleCenter.y, 2) 
      <= Math.pow(circleRadius, 2);
    }

    cy.on("tap", "edge", function (e) {});

    cy.on("zoom pan", function (e) {});
  });
