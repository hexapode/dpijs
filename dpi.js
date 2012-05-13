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
			 ['HTC Sensation Build', [256]],
			 ['HTC_IncredibleS', [252]],
			 ['HTC Vision Build',[252]],
			 ['HTC Desire Build', [252]],
			 ['HTC_Pyramid', [256]],
			 ['HTC_DesireS', [252]],
	 		 ['HTC Legend Build', [180]],
	 		 ['HTC_DesireHD', [217]],
	 		 ['HTC_DesireZ', [252]],
	 		 ['HTC_Wildfire', [125]]
		]

		var phoneDPI = null;

		function detectPhone()
		{
			var i = 0;
			var x = screen.width;
			var y = screen.height;
			var d = data;

			if (x < y)
			{
				var t = x;
				x = y;
				y = t;
			}
			while (i < data.length)
			{
				var patt=new RegExp(d[i][0],'i');
				if (navigator.userAgent.match(patt))
				{
					var j = 1;
					while (j < d[i].length)
					{
						if (d[i][j].length > 2 && d[i][j][0] == x && data[i][j][1] == y)
						{
							phoneDPI = d[i][j][2]
							return;
						}
						else if (data[i][j].length < 2)
						{
							phoneDPI = d[i][j][0]
							return;
						}
						++j;
					}
				}
				++i;
			}
			phoneDPI = 96;
		}

		function getDPI()
		{
			if (!phoneDPI)
				detectPhone();
			return phoneDPI;
		}
		window.getDPI = getDPI;
	}
)(window, navigator, document);