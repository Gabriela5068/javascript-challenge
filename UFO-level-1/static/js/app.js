// datetime: "1/1/2010",
// city: "benton",
// state: "ar",
// country: "us",
// shape: "circle",
// durationMinutes: "5 mins.",
// comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
// },

var tableData = data;
var button = d3.select("#filter-btn");
var input = d3.select("#datetime");
var tbody = d3.select("tbody")


button.on("click", function () {
    var inputData = input.property("value");
    var filteredData = tableData.filter(date => date.datetime === inputData);
    generateTable(filteredData)
});

function generateTable(table) {
    tbody.html("");
    table.forEach(obj => {
        var tr = tbody.append("tr");
        for (var key in obj) {
            tr.append("td").text(obj[key]);
        };
    });
};

//shows all data when loading website
generateTable(tableData);

