# Demonstration Integrating Showdown with Full Page Story
[See a Live Demo of this Example](http://github.openwaterfoundation.org/owf-lib-showdown-js/Markdown-to-HTML-Fullpage-Story/site/)

This demonstration uses an existing story website. Integrating the conversion of separate Markdown files to HTML significantly reduces the code found within the HTML file.
# Table of Contents
- [Common Markdown Syntax](#common-markdown-syntax)
- [Getting Started](#getting-started)
- [index.html](#index.html)
- [showdown-script.html](#showdown-script.html)
- [Markdown to HTML Styling Certain Cases](#markdown-to-html-certain-cases)



# Common Markdown Syntax

To ensure Markdown converts to HTML properly, it is important to conform to the appropriate Markdown syntax and standards required for Showdown.

*  _Make sure Markdown content is shifted left._

Review the following links for Markdown syntax:
- [Showdown's Markdown Syntax](https://github.com/showdownjs/showdown/wiki/Showdown's-Markdown-syntax)
- [General Markdown Syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# Getting Started 

For this particular demonstration, the package manager Bower is used per recommendation of [Showdown's documentation](https://github.com/showdownjs/showdown)
Create a ```bower.json``` file inside ```site``` directory through the interactive console command:
```
bower init
```

To install Showdown, run the following command (inside ```site``` directory):
```
bower install showdown --save
```
This installs Showdown inside the ```bower_componenets``` directory and saves Showdown as a dependency in the bower.json file.

For additional Showdown installation option:
- [Showdown Documentation](https://github.com/showdownjs/showdown)


# index.html

In the ```<head>``` tag of ```index.html``` be sure to include the following:

```
	<script src="bower_components/showdown/dist/showdown.min.js"></script>
	<script src="js/showdown-script.js"></script>

```
To convert Markdown to HTML, a JavaScript function will be called to do the majority of the work. Refer to the code bellow:

```
<div id="hydrologicCycle"></div>
	<script>
		run("swsi-stories-markdown/000.md", "hydrologicCycle");
	</script>

```

In this particular instance the Markdown file ```000.md``` (within the ```swsi-stories-markdown/``` directory) is being passed to the JavaScript function named ```run()```. This function takes both the file name of the Markdown file, as well as the output target. The output target in this case is defined as ``` hydrologicCycle```, and will be the location to hold HTML once converted. 


# showdown-script.js

The following function reads from a Markdown input file and converts its contents to HTML. This code can be found in ```showdown-script.js``` within the JavaScript directory. 

```
function run(inputFile, outputDiv) {

    $.get(inputFile, (textString) => {
        var converter = new showdown.Converter({tables: true, strikethrough: true});
        document.getElementById(outputDiv).innerHTML = converter.makeHtml(textString);
    })
  }

```

# Markdown to HTML Styling Certain Cases

It may be possible that the need for different colored text is needed. To display colored text, refer to the example below fount in ```002.md```.

```

- <span style="color:#b30000;">Less than 10th percentile = Much Below Normal</span>
- <span style="color:#fe9929;">10th - 24th percentile = Below Normal</span>
- <span style="color:green;">25th - 75th percentile = Normal</span>
- <span style="color:#6baed6;">76th - 90th percentile = Above Normal</span>
- <span style="color:#08519c;">Greater than 90th percentile = Much Above Normal</span>

```
This Markdown code results in the following:

- <span style="color:#b30000;">Less than 10th percentile = Much Below Normal</span>
- <span style="color:#fe9929;">10th - 24th percentile = Below Normal</span>
- <span style="color:green;">25th - 75th percentile = Normal</span>
- <span style="color:#6baed6;">76th - 90th percentile = Above Normal</span>
- <span style="color:#08519c;">Greater than 90th percentile = Much Above Normal</span>

For lists use a dash followed by a space:
 ```
- list
 ```

For color:
- Insert a ```<span>``` starting tag before the text you would like color and a closing ```</span>``` tag at the end of the text. 
- place the following within the first ```<span>``` tag: 
- Insert the color you would like in ```style="color:" ```, colors can be found through an HTML color picker which provides a code like ```#5942f4``` or by simply writing a basic color e.g. ```style="color:blue"```

