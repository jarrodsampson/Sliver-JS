# Sliver-JS
A Simple Popup Modal. Designed by [planlodge](https://github.com/planlodge).

[![Build Status](https://travis-ci.org/stevenbenner/jquery-powertip.svg?branch=master)](https://travis-ci.org/stevenbenner/jquery-powertip)
![License](https://img.shields.io/packagist/l/doctrine/orm.svg)

![Recording](https://raw.githubusercontent.com/planlodge/Sliver-JS/master/demo/recording.gif)

## Getting Started

 1. Include jQuery in your code.
 2. Download and include the sliver.js file.
 3. Set the class to sliver and the data-modale to the id of the modal you want.
 4. Pick your selector and apply sliver method.

## Full Example

		<!DOCTYPE html>
		<html lang="en-US">
		<head>
		  <meta charset="utf-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1">
		  <title>Sliver JS</title>
		  <meta name="description" content="">
		  <link rel="shortcut icon" href="http://palakmathur.in/images/icons/github.png" />
		  <link rel="stylesheet" href="css/sliver.min.css" />
		</head>
		<body>

		<center>
		<div id="wrapper">

		  <!-- the clickable link to start the popup -->
		  <div><a class="sliver" href="" data-modale="intro">Open Popup</a></div>

		  <div><a class="sliver" href="" data-modale="extra">Try Another Popup</a></div>


		  <div id="intro" class="sliver-popUp">Woah</div>
		  <div id="extra" class="sliver-popUp">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
		  

		</div>

		  <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script> 
		  <script src="src/sliver.min.js"></script> 
		  <script>
		  $(function(){
		    $('.sliver').sliver({
		      fadeSpeed: 900,
		      closeText: "Close"
		    });
		  });
		  </script>
		  
		</body>
		</html>


## License

Transimg is licensed under the [MIT license](http://opensource.org/licenses/MIT).
