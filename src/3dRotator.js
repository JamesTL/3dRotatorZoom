var rotateMe = (function($) {


	var d = 0,
		world,
		viewport,
		thisRotateXAngle = 0,
		thisRotateYAngle = 0;



	//default values
	var config = {
		//the container
		containerDiv: 'rotateDivOriginal',
		//the rotation amount 
		rotateDegree: 180

	}



	/***************************************/
	/***************************************/

	var init = function(passedConfig) {


		/* merge passedConfig to orginal config file -config will now use passedConfig values if present Sin this array passed at init*/
		$.extend(config, passedConfig);


		//console.log(passedConfig.containerDiv);
	    viewport = document.getElementById('viewport');
        world = document.getElementById(passedConfig.containerDiv);

}

	/***************************************/
	/***************************************/


	window.addEventListener('mousewheel', function(event) {

		event = event ? event : window.event;
		d = d - (event.detail ? event.detail * -5 : event.wheelDelta / 8);
		update();

	});

	/***************************************/
	/***************************************/

	window.addEventListener('DOMMouseScroll', function(event) {

		event = event ? event : window.event;
		d = d - (event.detail ? event.detail * -5 : event.wheelDelta / 8);
		update();

	});

	/***************************************/
	/***************************************/


	window.addEventListener('mousemove', function(e)

	{

		thisRotateYAngle = -(.5 - (e.clientX / window.innerWidth)) * config.rotateDegree;
		thisRotateXAngle = (.5 - (e.clientY / window.innerHeight)) * config.rotateDegree;
		update();
	});

	/***************************************/
	/***************************************/


	var update = function() {

		var t = 'translateZ( ' + d + 'px ) rotateX( ' + thisRotateXAngle + 'deg) rotateY( ' + thisRotateYAngle + 'deg)';
		world.style.webkitTransform = t;
		world.style.MozTransform = t;
		world.style.oTransform = t;
	}


	return {

		init: init
	}

	/***************************************/
	/***************************************/

})(jQuery);

rotateMe.init({containerDiv: 'rotateDiv',rotateDegree: 360});


