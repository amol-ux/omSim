// $(document).on("click",".continue-btn",function(){
//     debugger;
//     nextSection = $(this).closest(".continueWrapper ").next(".sections").find(".ui.grid");
//     if(nextSection.length == 0){
//     nextSection = $(this).closest(".continueWrapper ").next(".bggray");
//     }
//     $('html, body').animate({
//         scrollTop: $(nextSection).offset().top
//     }, 500);
// });
function loadChart(series){
    Highcharts.chart("container", {
        chart: {
          type: "area",
          marginTop: 50
        },
        
      //   title: {
      //     text: "Inventory Management",
      //   },
        title:null,
        legend: {
          align: 'left',
          verticalAlign: 'top',
          floating: true,
          visible:true
          
        },
        
        xAxis: {
          min: 1,
          max: 31,
          gridLineWidth: 1.5,
          tickInterval: 1,
          tickLength: 0,
          // crossing: 0,
          title: {
            text: "Day of Month",
            style:{
              fontWeight: 'bold',
              fontSize:'16px'
            }
          },
        },
        yAxis: {
          min: 0,
          max: 250000,
          title: {
            text: "Cost/Revenue($)",
            style:{
              fontWeight: 'bold',
              fontSize:'16px'
            }
          },
          // categories: [0, 50000, 100000, 150000, 200000, 250000],
          tickInterval: 50000,
          gridLineWidth: 0,
          labels: {
            formatter: function() {
              return Highcharts.numberFormat(this.value,0);
            }
           
          }
        },
      
        series: [
              {
              name: "Revenue",
              lineWidth: 2,
              data: [
                  8000, 16000, 24000, 32000, 40000, 48000, 56000, 64000, 72000,
                  80000, 88000, 96000, 104000, 112000, 120000, 128000, 136000,
                  144000, 152000, 160000, 168000, 176000, 184000, 192000, 200000,
                  208000, 216000, 224000, 0, 0, 0
              ],
              color: "#353d6e",
              fillColor:"#D1DFE2",
              },
              {
              name: "Costs",
              lineWidth: 2,
              data: [{y:101118, dataLabels: {enabled: true}}, 102236, 103354, 104472, 105590, 106708, 107826, 108944,
                  110062, 111180, 112298, {y:160718, dataLabels: {enabled:true}} , 161836, 162954, 164072, 165190,
                  166308, 167426, 168544, 169662, 170780, 171898, 173016, 174134,
                  175252, 176370, 177488, 178606, 0, 0, 0
              ],
              color: "#e6151f",
              fillColor:"#FBE4D4",
              marker: {
                  symbol: "circle",
              },
              },
              
          ],
         
      });
}

document.addEventListener("DOMContentLoaded", function () {
    loadChart();
    Highcharts.chart("container1", {
        chart: {
          type: "column",
          marginTop: 70,
          plotBorderWidth: 2,
        },

        title: {
          text: "<span x=400>Units left: 382</span> <span x=790>Demand: 37</span>",
          // fontSize: 20,
          verticalAlign: 'top',
          align: 'center',
          x:-300
        },
        
        legend: {
          align: "left",
          verticalAlign: "top",
          floating: true,
          visible: true,
        },

        xAxis: {
          min: 1,
          max: 31,
          step:1,
          gridLineWidth: 1.5,
          tickInterval: 1,
          tickLength: 0,
          // crossing: 0,
          title: {
            text: "Day of Month",
            style: {
              fontWeight: "bold",
              fontSize: "16px",
            },
          },
        },
        yAxis: {
          min: 0,
          max: 1000,
          // allowDecimals: false,
          title: {
            text: "Units",
            style: {
              fontWeight: "bold",
              fontSize: "16px",
            },
          },
          // categories: [0, 50000, 100000, 150000, 200000, 250000],
          tickInterval: 250,
          gridLineWidth: 0,
          labels: {
            formatter: function () {
              return Highcharts.numberFormat(this.value, 0);
            },
          },
        },
          plotoptions: {
            series: {
              borderRadius:0,
              // borderWidth:5,
            },
         
          },

        series: [
          {
            name: "Inventory",
            pointWidth: 35,
            //   lineWidth: 3,
            data: [
              0, 990, 958, 916, 874, 832, 790, 748, 706, 664, 622, 580, 538,
              496, 454, 412, 370, 853, 811, 769, 727, 685, 643, 601, 559, 517,
              475, 433, 391,
            ],
            color: "#579E96",
          },
        ],
      });
  });

$(document).on("click",".quarter",function(){
    Highcharts.chart("container", {
        chart: {
          type: "area",
          marginTop: 50
        },
        
      //   title: {
      //     text: "Inventory Management",
      //   },
        title:null,
        legend: {
          align: 'left',
          verticalAlign: 'top',
          floating: true,
          visible:true
          
        },
        
        xAxis: {
          min: 1,
          max: 31,
          gridLineWidth: 1.5,
          tickInterval: 1,
          tickLength: 0,
          // crossing: 0,
          title: {
            text: "Day of Month",
            style:{
              fontWeight: 'bold',
              fontSize:'16px'
            }
          },
        },
        yAxis: {
          min: 0,
          max: 250000,
          tickInterval: 1,
          title: {
            text: "Cost/Revenue($)",
            style:{
              fontWeight: 'bold',
              fontSize:'16px'
            }
          },
          // categories: [0, 50000, 100000, 150000, 200000, 250000],
          tickInterval: 50000,
          gridLineWidth: 0,
          labels: {
            formatter: function() {
              return Highcharts.numberFormat(this.value,0);
            }
           
          }
        },
      
        series: [
              {
              name: "Revenue",
              lineWidth: 2,
              data: [
                  4000, 12000, 20000, 28000, 36000, 44000, 52000, 60000, 68000,
                  76000, 84000, 92000, 100000, 108000, 116000, 124000, 132000,
                  140000, 148000, 156000, 164000, 172000, 180000, 188000, 196000,
                  204000, 212000, 220000, 0, 0, 0
              ],
              color: "#353d6e",
              fillColor:"#D1DFE2",
              },
              {
              name: "Costs",
              lineWidth: 2,
              data: [{y:0, dataLabels: {enabled: true}}, 8000, 9000, 10000, 10200, 10400, 10500, 10600,
                  10700, 107180, 112298, {y:160718, dataLabels: {enabled:true}} , 161836, 162954, 164072, 165190,
                  166308, 167426, 168544, 169662, 170780, 171898, 173016, 174134,
                  175252, 176370, 177488, 178606, 0, 0, 0
              ],
              color: "#e6151f",
              fillColor:"#FBE4D4",
              marker: {
                  symbol: "circle",
              },
              },
              
          ],
         
      });
});
$(document).on("click",".year",function(){
    Highcharts.chart("container", {
        chart: {
          type: "area",
          marginTop: 50
        },
        
      //   title: {
      //     text: "Inventory Management",
      //   },
        title:null,
        legend: {
          align: 'left',
          verticalAlign: 'top',
          floating: true,
          visible:true
          
        },
        
        xAxis: {
          min: 1,
          max: 31,
          gridLineWidth: 1.5,
          tickInterval: 1,
          tickLength: 0,
          // crossing: 0,
          title: {
            text: "Day of Month",
            style:{
              fontWeight: 'bold',
              fontSize:'16px'
            }
          },
        },
        yAxis: {
          min: 0,
          max: 250000,
          tickInterval: 1,
          title: {
            text: "Cost/Revenue($)",
            style:{
              fontWeight: 'bold',
              fontSize:'16px'
            }
          },
          // categories: [0, 50000, 100000, 150000, 200000, 250000],
          tickInterval: 50000,
          gridLineWidth: 0,
          labels: {
            formatter: function() {
              return Highcharts.numberFormat(this.value,0);
            }
           
          }
        },
      
        series: [
              {
              name: "Revenue",
              lineWidth: 2,
              data: [
                  1000, 500, 1500, 2000, 1800, 1200, 52000, 60000, 68000,
                  76000, 84000, 92000, 100000, 108000, 116000, 124000, 132000,
                  140000, 148000, 156000, 164000, 172000, 180000, 188000, 196000,
                  204000, 212000, 220000, 0, 0, 0
              ],
              color: "#353d6e",
              fillColor:"#D1DFE2",
              },
              {
              name: "Costs",
              lineWidth: 2,
              data: [{y:0, dataLabels: {enabled: true}}, 8000, 9000, 10000, 10200, 10400, 10500, 10600,
                  10700, 107180, 112298, {y:160718, dataLabels: {enabled:true}} , 161836, 162954, 164072, 165190,
                  166308, 167426, 168544, 169662, 170780, 171898, 173016, 174134,
                  175252, 176370, 177488, 178606, 0, 0, 0
              ],
              color: "#e6151f",
              fillColor:"#FBE4D4",
              marker: {
                  symbol: "circle",
              },
              },
              
          ],
         
      });
});
$(document).on("click",".month",function(){
    loadChart();
});


