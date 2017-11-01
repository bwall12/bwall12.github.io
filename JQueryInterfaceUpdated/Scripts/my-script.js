//i put everything in this function
$(document).ready(function(){
	
		$('#my-div-calendar').addClass('my-border'); // when loaded, give it a border
			console.log('in my doc ready f/n');
		$('#my-div-variable').addClass('my-border'); // when loaded, give it a border
			console.log('in my doc ready f/n');
		$('#my-div-date').addClass('my-border'); // when loaded, give it a border
			console.log('in my doc ready f/n');
		$('#my-div-year').addClass('my-border'); // when loaded, give it a border
			console.log('in my doc ready f/n');
		$('#my-div-console').addClass('my-border'); // when loaded, give it a border
			console.log('in my doc ready f/n');
	
	
	
		$('#my-div-console').append('Console is ready...');
		
		$('th').click(function(){
			$('#my-div-console').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
			$(this).toggleClass('selected').siblings().removeClass('selected');
	});
	
		
	
	
	
	}); 
