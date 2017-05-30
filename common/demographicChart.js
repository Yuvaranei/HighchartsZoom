[{name:"10001",y:44,drilldown:"10001"},{name:"10002",y:35,drilldown:"10002"},{name:"10003",y:1,drilldown:"10003"},{name:"10004",y:0,drilldown:"10004"}]//aggregateData


[{name:"10001",id:"10001",data:[["COUNT PARTICIPANTS",44],["COUNT FEMALE",22],["COUNT MALE",22],["COUNT GENDER UNKNOWN",0],["COUNT GENDER TOTAL",44],["COUNT PACIFIC ISLANDER",0],["COUNT HISPANIC LATINO",16],["COUNT AMERICAN INDIAN",0],["COUNT ASIAN NON HISPANIC",3],["COUNT WHITE NON HISPANIC",1],["COUNT BLACK NON HISPANIC",21],["COUNT OTHER ETHNICITY",3],["COUNT ETHNICITY UNKNOWN",0],["COUNT ETHNICITY TOTAL",44],["COUNT PERMANENT RESIDENT ALIEN",2],["COUNT US CITIZEN",42],["COUNT OTHER CITIZEN STATUS",0],["COUNT CITIZEN STATUS UNKNOWN",0],["COUNT CITIZEN STATUS TOTAL",44],["COUNT RECEIVES PUBLIC ASSISTANCE",20],["COUNT NRECEIVES PUBLIC ASSISTANCE",24],["COUNT PUBLIC ASSISTANCE UNKNOWN",0],["COUNT PUBLIC ASSISTANCE TOTAL",44]]},{name:"10002",id:"10002",data:[["COUNT PARTICIPANTS",35],["COUNT FEMALE",19],["COUNT MALE",16],["COUNT GENDER UNKNOWN",0],["COUNT GENDER TOTAL",35],["COUNT PACIFIC ISLANDER",0],["COUNT HISPANIC LATINO",1],["COUNT AMERICAN INDIAN",0],["COUNT ASIAN NON HISPANIC",28],["COUNT WHITE NON HISPANIC",6],["COUNT BLACK NON HISPANIC",0],["COUNT OTHER ETHNICITY",0],["COUNT ETHNICITY UNKNOWN",0],["COUNT ETHNICITY TOTAL",35],["COUNT PERMANENT RESIDENT ALIEN",2],["COUNT US CITIZEN",33],["COUNT OTHER CITIZEN STATUS",0],["COUNT CITIZEN STATUS UNKNOWN",0],["COUNT CITIZEN STATUS TOTAL",35],["COUNT RECEIVES PUBLIC ASSISTANCE",2],["COUNT NRECEIVES PUBLIC ASSISTANCE",33],["COUNT PUBLIC ASSISTANCE UNKNOWN",0],["COUNT PUBLIC ASSISTANCE TOTAL",35]]},{name:"10003",id:"10003",data:[["COUNT PARTICIPANTS",1],["COUNT FEMALE",1],["COUNT MALE",0],["COUNT GENDER UNKNOWN",0],["COUNT GENDER TOTAL",1],["COUNT PACIFIC ISLANDER",0],["COUNT HISPANIC LATINO",0],["COUNT AMERICAN INDIAN",0],["COUNT ASIAN NON HISPANIC",1],["COUNT WHITE NON HISPANIC",0],["COUNT BLACK NON HISPANIC",0],["COUNT OTHER ETHNICITY",0],["COUNT ETHNICITY UNKNOWN",0],["COUNT ETHNICITY TOTAL",1],["COUNT PERMANENT RESIDENT ALIEN",0],["COUNT US CITIZEN",1],["COUNT OTHER CITIZEN STATUS",0],["COUNT CITIZEN STATUS UNKNOWN",0],["COUNT CITIZEN STATUS TOTAL",1],["COUNT RECEIVES PUBLIC ASSISTANCE",0],["COUNT NRECEIVES PUBLIC ASSISTANCE",1],["COUNT PUBLIC ASSISTANCE UNKNOWN",0],["COUNT PUBLIC ASSISTANCE TOTAL",1]]},{name:"10004",id:"10004",data:[["COUNT PARTICIPANTS",0],["COUNT FEMALE",0],["COUNT MALE",0],["COUNT GENDER UNKNOWN",0],["COUNT GENDER TOTAL",0],["COUNT PACIFIC ISLANDER",0],["COUNT HISPANIC LATINO",0],["COUNT AMERICAN INDIAN",0],["COUNT ASIAN NON HISPANIC",0],["COUNT WHITE NON HISPANIC",0],["COUNT BLACK NON HISPANIC",0],["COUNT OTHER ETHNICITY",0],["COUNT ETHNICITY UNKNOWN",0],["COUNT ETHNICITY TOTAL",0],["COUNT PERMANENT RESIDENT ALIEN",0],["COUNT US CITIZEN",0],["COUNT OTHER CITIZEN STATUS",0],["COUNT CITIZEN STATUS UNKNOWN",0],["COUNT CITIZEN STATUS TOTAL",0],["COUNT RECEIVES PUBLIC ASSISTANCE",0],["COUNT NRECEIVES PUBLIC ASSISTANCE",0],["COUNT PUBLIC ASSISTANCE UNKNOWN",0],["COUNT PUBLIC ASSISTANCE TOTAL",0]]}]//drilldownArray

chart: {
                type: 'column'
            },
            title: {
                text: 'Demographic statistics'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Number count'
                }

            },
            legend: {
                enabled: false
            },
             plotOptions: {
        series: {
            borderWidth: 5,
            dataLabels: {
                enabled: true,
                format: '{point.y}'
            }
        }
    },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> in numbers<br/>'
            },

            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{"name":"Microsoft Internet Explorer","y":56.33,"drilldown":"Microsoft Internet Explorer"},{"name":"Chrome","y":24.03,"drilldown":"Chrome"},{"name":"Firefox","y":10.38,"drilldown":"Firefox"},{"name":"Safari","y":4.77,"drilldown":"Safari"},{"name":"Opera","y":0.91,"drilldown":"Opera"},{"name":"Proprietary or Undetectable","y":0.2,"drilldown":null}]
            }],
            drilldown: {
                series: [{"name":"Microsoft Internet Explorer","id":"Microsoft Internet Explorer","data":[["v11.0",24.13],["v8.0",17.2],["v9.0",8.11],["v10.0",5.33],["v6.0",1.06],["v7.0",0.5]]},{"name":"Chrome","id":"Chrome","data":[["v40.0",5],["v41.0",4.32],["v42.0",3.68],["v39.0",2.96],["v36.0",2.53],["v43.0",1.45],["v31.0",1.24],["v35.0",0.85],["v38.0",0.6],["v32.0",0.55],["v37.0",0.38],["v33.0",0.19],["v34.0",0.14],["v30.0",0.14]]},{"name":"Firefox","id":"Firefox","data":[["v35",2.76],["v36",2.32],["v37",2.31],["v34",1.27],["v38",1.02],["v31",0.33],["v33",0.22],["v32",0.15]]},{"name":"Safari","id":"Safari","data":[["v8.0",2.56],["v7.1",0.77],["v5.1",0.42],["v5.0",0.3],["v6.1",0.29],["v7.0",0.26],["v6.2",0.17]]},{"name":"Opera","id":"Opera","data":[["v12.x",0.34],["v28",0.24],["v27",0.17],["v29",0.16]]}]
            }