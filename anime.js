// anime({
// 	targets: 'div.box.red',
// 	translateY: [
// 	{ value: 200, duration: 500 },
// 	{ value: 0, duration: 800 }
//   ],
//  rotate: {
//     value: 360,
//     duration: 1800,
//     easing: 'easeInOutSine'
//   },
// });

// anime({
// 	targets: 'div.box.blue',
// 	translateY: [
// 	{ value: 200, duration: 500 },
// 	{ value: 0, duration: 800 }
//   ],
//  rotate: {
//     value: 360,
//     duration: 1800,
//     easing: 'easeInOutSine'
//    },
//    delay: 1000
//  });

    var animation = anime({
		targets: 'div.box',
				translateY: [
				{ value: 200, duration: 500 },
				{ value: 0, duration: 800 }
			  ],
			 rotate: {
			    value: 360,
			    duration: 1800,
			    easing: 'easeInOutSine'
			   },
			   backgroundColor: '#0000FF',
			   borderRadius: ['0%', '5%'],
			   opacity: '0.3',
			   delay: function(el, i, l){return i * 1000;},
			    autoplay: false
			});		
document.querySelector('#boxes .play').onclick = animation.play;
document.querySelector('#boxes .pause').onclick = animation.pause;
