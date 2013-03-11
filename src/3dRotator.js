var rotateMe = (function($) {


	var d = 0,
		world, 
		viewport, 
		thisRotateXAngle = 0,
		thisRotateYAngle = 0;



	//deault values
	var config = {
		containerDiv: 'rotateDiv'

	}



	/***************************************/
	/***************************************/

	var init = function(passedConfig) {

			console.log(passedConfig.containerDiv);


			viewport = document.getElementById('viewport');

			world = document.getElementById('rotateDiv');

			
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

		thisRotateYAngle = -(.5 - (e.clientX / window.innerWidth)) * 180;
		thisRotateXAngle = (.5 - (e.clientY / window.innerHeight)) * 180
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

rotateMe.init({
	containerDiv: 'rotateDiv'
});