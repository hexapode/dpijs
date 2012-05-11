/**
** DPI JS
**/

(
	function (window, navigator, document)
	{

		var data = [
			
			 ['iPhone', 
				// iPhone EDGE / iPhone 3G / iPhone 3GS
			 	[480, 320, 163],
			 	// iPhone 4 / iPhone 4S
			 	[960, 640, 326]
			 ],
			 // HTC
			 ['HTC Sensation Build', [960, 540, 256]],
			 ['HTC_IncredibleS', [800,480, 252]],
			 ['HTC Vision Build',[800, 480, 252]],
			 ['HTC Desire Build', [800, 480, 252]],
			 ['HTC_Pyramid', [960, 540, 256]],
			 ['HTC_DesireS', [800, 480, 252]],
	 		 ['HTC Legend Build', [480, 320, 180]],
	 		 ['HTC_DesireHD', [800, 480, 217]],
	 		 ['HTC_DesireZ', [800, 480, 252]],
	 		 ['HTC_Wildfire', [320, 240, 125]]
		]
		var phone = null;
		function detectPhone()
		{
			var i = 0;
			while (i < data.length)
			{
				var patt=new RegExp(data[i][0],'i');
				if (navigator.userAgent.match(patt))
				{

				}
				++i;
			}
		}

		window.getMmFromPixel = function(pixels)
		{

		}

		window.getPixelFromMm = function(mm)
		{

		}
	}
)(window, navigator, document