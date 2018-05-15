

$("#navigate ul").on("click", "li", function (event) {
    var ele = $(this).parents("ul").find("li").removeClass("active");
    $(this).removeClass("hvr-underline");
    $(this).addClass("active");
    $(this).addClass("hvr-underline");

});


// Create the chart
Highcharts.chart('skillset', {
    chart: {
        type: 'column'
    },
    credits: {
        enabled: false
    },
    title: {
        text: '<b>Skillset, with years of experience</b>'
    },
    xAxis: {
        type: 'category',
        label: {
            style: {
                fontWeight: 'bold',
            }
        }
    },
    yAxis: {
        title: {
            text: '<b>Years Of Expertise</b>'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}years</b><br/>'
    },

    "series": [
        {
            "name": "Skills",
            "colorByPoint": true,
            "data": [
                {
                    "name": "HTML5",
                    "y": 3.5,
                    "drilldown": "HTML5"
                },
                {
                    "name": "CSS3",
                    "y": 3.5,
                    "drilldown": "CSS3"
                },
                {
                    "name": "Javascript",
                    "y": 3,
                    "drilldown": "Javascript"
                },
                {
                    "name": "AngularJS",
                    "y": 2.5,
                    "drilldown": "AngularJS"
                },
                {
                    "name": "NodeJS",
                    "y": 2,
                    "drilldown": "NodeJS"
                },
                {
                    "name": "Boostrap 3",
                    "y": 2,
                    "drilldown": "Boostrap 3"
                },
                {
                    "name": "jQuery",
                    "y": 2,
                    "drilldown": "jQuery"
                },
                {
                    "name": "SCSS/SASS",
                    "y": 1.5,
                    "drilldown": "SCSS/SASS"
                },
                {
                    "name": "Protractor/Karma",
                    "y": 2,
                    "drilldown": "Protractor/Karma"
                },
                {
                    "name": "Gulp",
                    "y": 1.5,
                    "drilldown": "Gulp"
                },
                {
                    "name": "D3.js",
                    "y": 1.2,
                    "drilldown": "D3.js"
                },
                {
                    "name": "MongoDB",
                    "y": 0.5,
                    "drilldown": "MongoDB"
                },
                {
                    "name": "AJAX/Rest API",
                    "y": 3.5,
                    "drilldown": "AJAX/Rest API"
                },
                {
                    "name": "GIT",
                    "y": 3,
                    "drilldown": "GIT"
                }
            ]
        }
    ]
});
