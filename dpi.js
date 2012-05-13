/**
** DPI JS
** By Pierre-Loic Doulcet (@hexapode)
** 
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
			 ['iPad', 
				// iPad 1 / iPad 2
			 	[1024, 768, 132],
			 	// iPad 3
			 	[2048 , 1536 , 264]
			 ],
 				['iPod', 
				// iPodTouch 1 / 2/ 3
			 	[480, 320, 163],
			 	// iPodTouch 4
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

		var phoneDPI = null;

		function detectPhone()
		{
			var i = 0;
			var x = screen.width;
			var y = screen.height;

			if (x < y)
			{
				var t = x;
				x = y;
				y = t;
			}
			while (i < data.length)
			{
				var patt=new RegExp(data[i][0],'i');
				if (navigator.userAgent.match(patt))
				{
					var j = 0;
					while (j < data[i][1].length)
					{
						if (data[i][1][j][0] == x && data[i][1][j][1] == y)
						{
							phoneDPI = data[i][1][j][2]
							return;
						}
						++j;
					}
				}
				++i;
			}
			phoneDPI = 96;
		}

		function getMmFromPixel(pixels)
		{
			if (!phoneDPI)
				detectPhone();
			return (pixels / phoneDPI) / 0.393700787 | 0;
		}
		window.getMmFromPixel = getMmFromPixel;

		function getPixelFromMm(mm)
		{
			if (!phoneDPI)
				detectPhone();
			return mm * 0.393700787 * phoneDPI | 0;
		}
		window.getPixelFromMm = getPixelFromMm;

		function getInchFromPixel(pixels)
		{
			if (!phoneDPI)
				detectPhone();
			return (pixels / phoneDPI) | 0;
		}
		window.getInchFromPixel = getInchFromPixel;

		function getPixelFromInch(inch)
		{
			if (!phoneDPI)
				detectPhone();
			return inch  * phoneDPI | 0;
		}
		window.getPixelFromInch = getPixelFromInch;

		function getDPI()
		{
			if (!phoneDPI)
				detectPhone();
			return phoneDPI;
		}
		window.getDPI = getDPI;
	}
)(window, navigator, document);