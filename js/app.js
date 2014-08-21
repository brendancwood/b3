$(document).ready(function(){
	//animates a box over portfolio images on hover using css
    function boxHoverIn(){
		$('.square').on('mouseenter', '.portfolio-item', function(){
			var self = $(this);
			var height = self.find('img').height();
			var width = self.find('img').width();
			self.find('.box-hover').css('width', width).css('height', height).animate({opacity: 0.9}, 300);
		});
	}
	function boxHoverOut(){
		$('.square').on('mouseleave', '.portfolio-item', function(){
			var self = $(this);
			self.find('.box-hover').animate({opacity: 0}, 400);
		});
	}
	boxHoverIn();
	boxHoverOut();

	$('.showContactForm').on('click', function(){
		$('.myModal').modal('show');
	});
	//Delay number for scale of my picture, changes if user scrolls vs button click
	var delay = 700;
	$('.moreButton').on('click', function(){
		scaleUp();
	})

	function scaleUp(){
		//delay the scale so element is in viewport when animated
		setTimeout(function(){
			$('.myFace').animate({
        		height: 200,
        		width: 200        		
        	}, 500);
		}, delay)
	}

	$(document).on("mousewheel", function() {
        var amountScrolled = $(document).scrollTop();
        delay = 200;
        if (amountScrolled > 300){
        	scaleUp();
        }
    });

})