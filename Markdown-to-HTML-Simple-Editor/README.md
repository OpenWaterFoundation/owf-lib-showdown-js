# Simple Markdown to HTML Editor
[See a Live Demo of This Example](http://github.openwaterfoundation.org/owf-lib-showdown-js/Markdown-to-HTML-Simple-Editor/site/)

The following example is a Tutorial found on the [Showdown Documentation](https://github.com/showdownjs/showdown/wiki/Tutorial:-Markdown-editor-using-Showdown).

This tutorial implements a browser markdown editor using showdown and showdown extensions. 

# Table of Contents
- [Recommendations Before Starting](#recommendations-before-starting)
- [Getting Strated](#getting-strarted)
- [Installing Showdown](#installng-showdown)
- [index.html](#index-html)
- [style.css](#style.css)
- [script.js](#script.js)

# Recommendations Before Starting 
Showdown's core library doesn't have any dependencies so the setup is pretty straightforward. However, Showdown's documentation encourages people to use a package manager such as [bower](https://bower.io/) to manage project dependencies.

Install bower on npm:
``` 
npm install -g bower
```
Install showdown on bower:

``` 
bower install showdown 
```

It is important to note that upon installing bower through npm, you will be prompted to upgrade to yarn instead. This is because although the Bower is maintained, the package has been deprecated. It is unknown whether showdown will work with yarn. So for the purpose of this example, bower will continue to be used. 

To see how to migrate away from Bower, consult this [webpage](https://bower.io/blog/2017/how-to-migrate-away-from-bower/).

# Getting Started 
Create a directory called ``` showdown-editor ``` and recreate the following file structure.

```
showdown-editor
├──index.html
├── bower.json
├──js
|    └──script.js
└──css
    └──style.css
```

```bower.json``` is initialized by running the interactive console command:
```
bower init
```
# Installing Showdown
To install Showdown, run the following command (inside ```showdown-editor``` directory):
```
bower install showdown --save
```
This installs showdown inside the ```bower_components``` directory and save showdown as a dependency in the bower.json file.

# index.html
Create a basic html5 html file:

```
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="UTF-8"/>
  <link rel="stylesheet" href="css/style.css"/>
</head>
<body>

  <textarea id="sourceTA" rows="10" cols="82"></textarea>
  <hr/>
  <button id="runBtn" onClick="run()">Convert</button>
  <hr/>
  <div id="targetDiv"></div>

</body>
</html>
```
The ```<textarea>```tag will hold the markdown code that will be converted to HTML.
Review the [markdown systax](https://github.com/showdownjs/showdown/wiki/Showdown's-Markdown-syntax) specific for showdown when inserting into the ```<textarea>``` tag. Generally make sure that markdown code is shifted all the way to the left. Some exceptions will include code blocks (two tabs are per line of code in code block is required).

Be sure to include showdown.js and your script.js in index.html file, just before the closing </body> tag:

```
<script src="bower_components/showdown/1.0.1/showdown.min.js"></script>
<script src="js/script.js"></script>
```
(NOTE: Make sure the path to showdown.min.js is correct. In this instance the version being used is version 1.0.1, change this to the correct path name whether it is a different version or dist).

# style.css

```
#sourceTA {
    display: block;
}
#targetDiv {
  border: 1px dashed #333333;
  width: 600px;
  height: 400px;
}
```

# script.js
Add the following content to js/script.js
```
function run() {
  var text = document.getElementById('sourceTA').value,
      target = document.getElementById('targetDiv'),
      converter = new showdown.Converter(),
      html = converter.makeHtml(text);
    
    target.innerHTML = html;
}
```

The ```script.js``` file is pretty straightforward. When the ```runBtn``` is clicked, it gets the text of the textarea, passes it through showdown that converts the markdown into html. The output is then put inside the div ```targetDiv```, ultimately replacing the previous content. 

