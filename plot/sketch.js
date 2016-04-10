var table;
var pubYear;
var neighborhood;
var shade;

function preload() {
  table = loadTable("results1915.csv", "csv", "header");
}
// function draw() {
//   background(255);
//   line(0,mouseY,1250,mouseY);
// }


function setup() {
  createCanvas(1220, 4000);
  // text("New York City Neighborhoods in the News", 50, 50);
  //cycle through the table
  // print(max(table))
  for (var r = 0; r < table.getRowCount(); r++) {
    for (var c = 0; c < table.getColumnCount(); c++) {

      if (c === 0) {
        neighborhood = table.getString(r, c);
      }
      if (c > 0) {
        shade = table.getString(r, c);
      }
      // else(shade = table.getString(r, c));
      fill(0);
      text(neighborhood, 15, 15 * r + 50);

      var shadeMap = map(shade, 0, 150, 0, 1);
      // print(shadeMap);
      colorMode(RGB);
      // stroke(255);
      from = color(255, 255, 255);
      to = color(50, 50, 50);
      colorMode(RGB); // Try changing to HSB.
      interA = lerpColor(from, to, shadeMap);
      fill(interA);
      strokeWeight(1);
      rect(10 * c + 190, 15 * r + 39, 10, 15);
      if (c < 11) {
        fill(0);
        strokeWeight(2);
        line(250 + 100 * c, 20, 250 + 100 * c, 6000);
        fill(0);
        text(10 * c + 1920, 220 + 100 * c, 30);
      }

      // if (shadeMap <= .24) {
      //   fill(from)
      // }
      // fill(shadeMap);
      // rect(10 * c + 100, 10 * r + 1, 15, 15);

    }
  }
  colorMode(RGB);
  from = color(255, 255, 255);
  to = color(50, 50, 50);
  colorMode(RGB); // Try changing to HSB.
  interA = lerpColor(from, to, 0.25);
  interB = lerpColor(from, to, 0.50);
  interC = lerpColor(from, to, 0.75);
  fill(from);
  strokeWeight(1);
  rect(100, 10, 10, 15);
  fill(interA);
  strokeWeight(1);
  rect(110, 10, 10, 15);
  fill(interB);
  strokeWeight(1);
  rect(120, 10, 10, 15);
  fill(interC);
  strokeWeight(1);
  rect(130, 10, 10, 15);
  fill(to);
  strokeWeight(1);
  rect(140, 10, 10, 15);
  text(0, 90, 10);
  text("150+", 150, 10);
  text("# of Articles", 20, 22);
}



