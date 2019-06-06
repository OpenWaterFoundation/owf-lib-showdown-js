
// $.get(inputFile, (textString) => {
//     var converter = new showdown.Converter();
//         target = document.getElementById("outputDiv"),
//         html = converter.makeHtml(textString);
    
//         target.innerHTML = html;
// })

function run(inputFile, outputDiv) {

    $.get(inputFile, (textString) => {
        var converter = new showdown.Converter({tables: true, strikethrough: true});
        console.log(textString);
        document.getElementById(outputDiv).innerHTML = converter.makeHtml(textString);
    })
  }


// $.get(inputFile, (textString) => {
//     var converter = new showdown.Converter();
//     console.log(textString);
//     document.getElementById("output").innerHTML = converter.makeHtml(textString);
// })