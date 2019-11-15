$(document).ready(function(){
	var arr = [];
		arr['audi'] = [1, 2];
		arr['bmw'] = [3, 4];
	var arr2 = [];
		arr2[1] = ['50','30','10'];
		arr2[2] = ['3','18','10'];
		arr2[3] = ['1','2','3'];
		arr2[4] = ['4','5','6'];

 arrChartData = [];
	
    	
    $("#carMake").change(function(){
    	$('.emp').remove();

    	$('#carModel1').empty();
    	$('#carModel2').empty();
	    	var option = $('#carMake').val().toLowerCase();
            //arrChart.push(option);
				$('#carModel1').append("<option class ='emp2'></option>");

		    	for (var i = 0; i < arr[option].length; i++) {
		    		$('#carModel1').append("<option>" + arr[option][i] + "</option>");
		    	}
    })

    $("#carModel1").change(function(){
    	$('.emp1').remove();
    	$('.emp2').remove();
    	
    		$('#carModel2').empty();

    		var option2 = $("#carModel1").val().toLowerCase();
            arrChartData.push(option2);
    		for(var j=0; j<arr2[option2].length; j++){

    			$('#carModel2').append("<option>" + arr2[option2][j] + "</option>");
    		}

            var option3 = $('#carModel2').val().toLowerCase();
            arrChartData.push(option3);
    })

        
        console.log(arrChartData);
    
    var ctx = document.getElementById('myChart').getContext('2d');

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
            datasets: [{
            data: [20,30]
        }]
    }
        // Configuration options go here
      

    });	
    
});


