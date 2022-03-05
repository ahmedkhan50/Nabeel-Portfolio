(function () {

    // navigation control. 
    $("#navigate ul").on("click", "li", function (event) {
        var ele = $(this).parents("ul").find("li").removeClass("active");
        $(this).removeClass("hvr-underline");
        $(this).addClass("active");
        $(this).addClass("hvr-underline");

    });
    // work experience accordion.
    $("#work_exp_accordions").accordion({
        collapsible: true,
        heightStyle: "content",
        navigation: true
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
                        "y": 5.5,
                        "drilldown": "HTML5"
                    },
                    {
                        "name": "CSS3",
                        "y": 5.5,
                        "drilldown": "CSS3"
                    },
                    {
                        "name": "Javascript",
                        "y": 6,
                        "drilldown": "Javascript"
                    },
                    {
                        "name": "Java/Spring Boot",
                        "y": 4,
                        "drilldown": "Java/Spring Boot"
                    },
                    {
                        "name": "Angular/TypeScript",
                        "y": 3.5,
                        "drilldown": "Angular/TypeScript"
                    },
                    {
                        "name": "NodeJS/ExpressJS",
                        "y": 4,
                        "drilldown": "NodeJS/ExpressJS"
                    },
                    {
                        "name": "Docker",
                        "y": 3,
                        "drilldown": "Docker"
                    },
                    {
                        "name": "Boostrap 3/4",
                        "y": 5,
                        "drilldown": "Boostrap 3/4"
                    },
                    {
                        "name": "jQuery",
                        "y": 4,
                        "drilldown": "jQuery"
                    },
                    {
                        "name": "React & Redux",
                        "y": 2.5,
                        "drilldown": "React & Redux"
                    },
                    {
                        "name": "SCSS/SASS",
                        "y": 3.5,
                        "drilldown": "SCSS/SASS"
                    },
                    {
                        "name": "Protractor/Karma/Cypress",
                        "y": 2,
                        "drilldown": "Protractor/Karma/Cypress"
                    },
                    {
                        "name": "Gulp",
                        "y": 1.5,
                        "drilldown": "Gulp"
                    },
                    {
                        "name": "D3.js/Chart.js",
                        "y": 2,
                        "drilldown": "D3.js/Chart.js"
                    },
                    {
                        "name": "MongoDB",
                        "y": 0.5,
                        "drilldown": "MongoDB"
                    },
                    {
                        "name": "AJAX/Rest API",
                        "y": 4.5,
                        "drilldown": "AJAX/Rest API"
                    },
                    {
                        "name": "GIT",
                        "y": 5,
                        "drilldown": "GIT"
                    },
                    {
                        "name": "Python",
                        "y": 2.5,
                        "drilldown": "Python"
                    },
                    {
                        "name": "Microsoft Azure",
                        "y": 2,
                        "drilldown": "Microsoft Azure"
                    }
                ]
            }
        ]
    });

} ());
