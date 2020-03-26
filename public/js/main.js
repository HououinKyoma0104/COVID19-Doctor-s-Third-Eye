      google.charts.load('current', {
        'packages':['geochart'],
        'packages':['geochart'],
        'packages':['corechart'],
        'packages':['corechart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawWorldMap);
      google.charts.setOnLoadCallback(drawIndiaMap);
      google.charts.setOnLoadCallback(drawpieoneChart);
      google.charts.setOnLoadCallback(drawpietwoChart);

      function drawWorldMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Cases'],
          ['China', 81218],
          ['Italy', 69176],
          ['United States', 60063],
          ['Spain', 47610],
          ['Germany', 35740],
          ['Iran', 27017],
          ['France', 22304],
          ['Switzerland', 10537],
          ['South Korea', 9137],
          ['United Kingdoms', 8227],
          ['Netherlands', 6412],
          ['Austria', 5588],
          ['Belgium', 4937],
          ['Norway', 3034],
          ['Portugal', 2995],
          ['Canada', 2892],
          ['Sweden', 2526],
          ['Australia', 2431],
          ['Brazil', 2274],
          ['Israel', 2170],
          ['Turkey', 1874],
          ['Malaysia', 1796],
          ['Denmark', 1715],
          ['Czechia', 1497],
          ['Luxembourg', 1333],
          ['Ireland', 1329],
          ['Japan', 1193],
          ['Ecuador', 1173],
          ['Chile', 1142],
          ['Pakistan', 1022],
          ['Poland', 957],
          ['Thailand', 934],
          ['Romania', 906],
          ['Saudi Arabia', 900],
          ['Finland', 880],
          ['Greece', 821],
          ['Indonesia', 790],
          ['Iceland', 737],
          ['Diamond Princess', 712],
          ['South Africa', 709],
          ['Russia', 658],
          ['Philippines', 636],
          ['Singapore', 631],
          ['India', 606],
          ['Slovenia', 528],
          ['Qatar', 526],
          ['Panama', 443],
          ['Egypt', 442],
          ['Croatia', 442],
          ['Bahrain', 419],
          ['Peru', 416],
          ['Hong Kong', 410],
          ['Mexico', 405],
          ['Estonia', 404],
          ['Dominican Republic', 392],
          ['Argentina', 387],
          ['Serbia', 384],
          ['Colombia', 378],
          ['Iraq', 346],
          ['Lebanon', 333],
          ['UAE', 333],
          ['Algeria', 302],
          ['Armenia', 265],
          ['Lithuania', 255],
          ['Bulgaria', 242],
          ['Taiwan', 235],
          ['Hungary', 226],
          ['Latvia', 221],
          ['Slovakia', 216],
          ['New Zealand', 205],
          ['Kuwait', 195],
          ['Uruguay', 189],
          ['Andorra', 188],
          ['San Marino', 187],
          ['North Macedonia', 177],
          ['Costa Rica', 177],
          ['Tunisia', 173],
          ['Morocco', 170],
          ['Bosnia and Herzegovina', 168],
          ['Jordan', 154],
          ['Moldova', 149],
          ['Albania', 146],
          ['Vietnam', 141],
          ['Cyprus', 132],
          ['Faeroe Islands', 132],
          ['Malta', 129],
          ['Ukraine', 116],
          ['Burkina Faso', 114],
          ['Réunion', 111],
          ['Brunei', 109],
          ['Sri Lanka', 102],
          ['Oman', 99],
          ['Senegal', 99],
          ['Cambodia', 96],
          ['Azerbaijan', 93],
          ['Venezuela', 91],
          ['Belarus', 86],
          ['Afghanistan', 84],
          ['Kazakhstan', 80],
          ['Guadeloupe', 73],
          ['Georgia', 73],
          ['Ivory Coast', 73],
          ['Cameroon', 70],
          ['Ghana', 68],
          ['Palestine', 62],
          ['Trinidad and Tobago', 60],
          ['Cuba', 57],
          ['Martinique', 57],
          ['Uzbekistan', 56],
          ['Montenegro', 52],
          ['Liechtenstein', 51],
          ['DRC', 48],
          ['Mauritius', 48],
          ['Nigeria', 46],
          ['Kyrgyzstan', 44],
          ['Rwanda', 40],
          ['Bangladesh', 39],
          ['Channel Islands', 39],
          ['Paraguay', 37],
          ['Honduras', 36],
          ['Mayotte', 36],
          ['Bolivia', 32],
          ['Macao', 30],
          ['Kenya', 28],
          ['Gibraltar', 26],
          ['Jamaica', 25],
          ['French Polynesia', 25],
          ['Monaco', 23],
          ['French Guiana', 23],
          ['Isle of Man', 23],
          ['Togo', 23],
          ['Guatemala', 21],
          ['Madagascar', 19],
          ['Barbados', 18],
          ['Aruba', 17],
          ['New Caledonia', 14],
          ['Uganda', 14],
          ['Maldives', 13],
          ['Ethiopia', 12],
          ['Tanzania', 12],
          ['Zambia', 12],
          ['Djibouti', 11],
          ['Mongolia', 10],
          ['El Salvador', 9],
          ['Equatorial Guinea', 9],
          ['Saint Martin', 8],
          ['Suriname', 8],
          ['Niger', 7],
          ['Dominica', 7],
          ['Haiti', 7],
          ['Namibia', 7],
          ['Seychelles', 7],
          ['Cayman Islands', 6],
          ['Curaçao', 6],
          ['Gabon', 6],
          ['Benin', 6],
          ['Bermuda', 6],
          ['Greenland', 6],
          ['Guyana', 5],
          ['Bahamas', 5],
          ['Fiji', 5],
          ['Mozambique', 5],
          ['Cabo Verde', 4],
          ['Congo', 4],
          ['Guinea', 4],
          ['Vatican City', 4],
          ['Eswatini', 4],
          ['Syria', 4],
          ['Gambia', 3],
          ['Sudan', 3],
          ['Zimbabwe', 3],
          ['Nepal', 3],
          ['Angola', 3],
          ['Antigua and Barbuda', 3],
          ['CAR', 3],
          ['Chad', 3],
          ['Laos', 3],
          ['Liberia', 3],
          ['Myanmar', 3],
          ['St. Barth', 3],
          ['Saint Lucia', 3],
          ['Bhutan', 2],
          ['Guinea-Bissau', 2],
          ['Mali', 2],
          ['Mauritania', 2],
          ['Nicaragua', 2],
          ['Sint Maarten', 2],
          ['Belize', 1],
          ['Eritrea', 1],
          ['Grenada', 1],
          ['Libya', 1],
          ['Montserrat', 1],
          ['Papua New Guinea', 1],
          ['St. Vincent Grenadines', 1],
          ['Somalia', 1],
          ['Timor-Leste', 1],
          ['Turks and Caicos', 1]
        ]);

        var options = {
            colorAxis:{colors:['rgb(63,224,208)','rgb(0,136,169)']}
        };

        var chart = new google.visualization.GeoChart(document.getElementById('world_div'));

        chart.draw(data, options);
      }

      function drawIndiaMap() {
        var data = google.visualization.arrayToDataTable([
          ['State', 'Cases'],
          ['Andhra Pradesh', 7],
          ['Bihar', 2],
          ['Chhattishgarh', 1],
          ['Delhi', 31],
          ['Gujarat', 29],
          ['Haryana', 16],
          ['Himachal Pradesh', 3],
          ['J&K', 7],
          ['Karnataka', 37],
          ['Kerala', 95],
          ['Madhya Pradesh', 7],
          ['Maharashtra', 67],
          ['Odisha', 2],
          ['Puduchery', 1],
          ['Punjab', 21],
          ['Rajasthan', 33],
          ['Tamil Nadu', 12],
          ['Telengana', 32],
          ['Uttar Pradesh', 33],
          ['Uttarakhand', 3],
          ['West Bengal', 7],
        ]);

        var options = {
            title:"States & UTs",
            colorAxis:{colors:['rgb(63,224,208)','rgb(0,136,169)']},
            region: 'IN',
            resolution: 'provinces',
            width:'100%',
            height:'100%'
        };

        var chart = new google.visualization.GeoChart(document.getElementById('india_div'));

        chart.draw(data, options);
      }
      
      function drawpieoneChart() {
        var data = google.visualization.arrayToDataTable([
          ['Nationality', 'Cases'],
          ['Imported',     190],
          ['Local',      164],
          ['Not Sure Yet',  67]
        ]);

        var options = {
          title: 'Transmission Source',
          pieHole: 0.4,
          width:'100%',
          height:'100%'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart_one'));
        chart.draw(data, options);
      }
      function drawpietwoChart() {
        var data = google.visualization.arrayToDataTable([
          ['Nationality', 'Cases'],
          ['Indian',     380],
          ['Foreign National',      41],
        ]);

        var options = {
          title: 'Nationality',
          pieHole: 0.4,
          width:'100%',
          height:'100%'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart_two'));
        chart.draw(data, options);
      }

      function toggleFunction(){
        var x = document.getElementById("myDIV1");
        var y = document.getElementById("myDIV2");
        if(x.style.display==="none" && y.style.display==="none"){
          x.style.display="block";
          y.style.display="block";
        } 
      }