	function debugging(o){ //Draw in console for debugging purposes
		console.log(o);	
	}
	/*
	function removeInvisiblePixels(image){
	context.drawImage(image,0,0);
	var imageData = context.getImageData(0,0,image.width, image.height);
	
	red = 255;
	green = 0;
	blue = 255;
		for (var i = 0; i < imageData.data.length; i+= 4){
			if (imageData.data[i] == red && imageData.data[i + 1] == green && imageData.data[i + 2] == blue){
				
				imageData.data[i] = 0;
				imageData.data[i + 1] = 0;
				imageData.data[i + 2] = 0;
				
				imageData.data[i + 3] = -1;
				debugging("hi");
			}
		}
	image.data = imageData;
	 Currently not working
	image.src = imageData;
	debugging(image.src);
	
	}
	
function scaleImageData(imageData, scale) {
  
  var scaled = context.createImageData(imageData.width * scale, imageData.height * scale);

  for(var row = 0; row < imageData.height; row++) {
    for(var col = 0; col < imageData.width; col++) {
      var sourcePixel = [
        imageData.data[(row * imageData.width + col) * 4 + 0],
        imageData.data[(row * imageData.width + col) * 4 + 1],
        imageData.data[(row * imageData.width + col) * 4 + 2],
        imageData.data[(row * imageData.width + col) * 4 + 3]
      ];
      for(var y = 0; y < scale; y++) {
        var destRow = row * scale + y;
        for(var x = 0; x < scale; x++) {
          var destCol = col * scale + x;
          for(var i = 0; i < 4; i++) {
            scaled.data[(destRow * scaled.width + destCol) * 4 + i] =
              sourcePixel[i];
          }
        }
      }
    }
  }

  return scaled;
}

*/