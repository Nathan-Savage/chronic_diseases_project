// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://data.cdc.gov/api/views/hksd-2xuw/rows.json?accessType=DOWNLOAD").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let info = metadata.filter(x => x.id == sample)[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    for (const [key, value] of Object.entries(info)) {
      panel.append("h6").text(`${key}: ${value}`);
    }
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json(" https://data.cdc.gov/api/views/hksd-2xuw/rows.json?accessType=DOWNLOAD").then((data) => {

    // Get the samples field
    let sampleData = data.samples;

    // Filter the samples for the object with the desired sample number
    let info = sampleData.filter(x => x.id === sample)[0];
    

    // Get the otu_ids, otu_labels, and sample_values
    let otuIds = info.otu_ids;
    let otuLabels = info.otu_labels;
    let sampleValues = info.sample_values;

    // Build a Bubble Chart
    let bubbleChartTrace = {
    x: otuIds,
    y: sampleValues,
    mode: "markers",
    marker: {
      color: otuIds,
      size: sampleValues,
      colorscale: "Portland" //heat map = Portland colorscale
    },
    text: otuLabels
    };
  let bubbleTraces = [bubbleChartTrace]

    // Render the Bubble Chart
    let bubbleLayout = {
      title: "Health Info by State",
      xaxis: {title: "Disease ID"},
      yaxis: {title: "Number of Cases"}
    };

    Plotly.newPlot("bubble", bubbleTraces, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let barChartInfo = otuIds.map(x => `OTU: ${x}`);

  
    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let trace1 = {
      x: sampleValues.slice(0, 10).reverse(),
      y: barChartInfo.slice(0, 10).reverse(),
      type: "bar",
      marker: {
        colorscale: "Portland",
        color: sampleValues.slice(0, 10).reverse()
      },
      text: otuLabels.slice(0, 10).reverse(),
      orientation: "h"
    };

    // Render the Bar Chart
    let traces = [trace1];
    let layout = {
      title: "Top 10 Diseases",
      xaxis: {title: "Number of Dieases"}
    };
    Plotly.newPlot("bar", traces, layout);
  });
}

// Function to run on page load
function init() {
  d3.json(" https://data.cdc.gov/api/views/hksd-2xuw/rows.json?accessType=DOWNLOAD").then((data) => {
    d3.json("").then((data) => {

    // Get the names field
    let names = data.names;


    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      dropdown.append("option").text(name);
    }

    // Get the first sample from the list
    let defaultName = names[0];


    // Build charts and metadata panel with the first sample
    buildCharts(defaultName);
    buildMetadata(defaultName);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
