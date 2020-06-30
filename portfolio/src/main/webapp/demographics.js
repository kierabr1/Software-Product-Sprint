google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/** Creates a chart and adds it to the page. */
function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Race');
  data.addColumn('number', 'Percentage');
        data.addRows([
          ['White', 34.6],
          ['Non-US Resident', 34.6],
          ['Asian', 14.8],
          ['Hispanic or Latino', 6.91],
          ['African American', 3.14],
          ['Other', 5.95]
        ]);

  const options = {
    'title': 'Demographics of Computer Science Degrees Awarded by Race',
    'width':500,
    'height':400
  };

  const chart = new google.visualization.PieChart(
      document.getElementById('race-chart-container'));
  chart.draw(data, options);
}