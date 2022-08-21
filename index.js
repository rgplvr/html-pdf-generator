var html_to_pdf = require('html-pdf-node');

const fs = require('fs');

let options = { format: 'A4' };
// let file = [{ url: "https://facebook.com", name: 'example.pdf' }];

fs.readFile('/Users/raj/workspace_code/html-pdf-node/sover.html', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
  let file = [{ content: data, name: 'example.pdf' }];
  html_to_pdf.generatePdfs(file, options).then(output => {
    console.log("PDF Buffer:-", output); // PDF Buffer:- [{url: "https://example.com", name: "example.pdf", buffer: <PDF buffer>}]
    console.log("buffer>", output[0]["buffer"]);
    fs.createWriteStream("./example1.pdf").write(output[0]["buffer"]);
  });
  
});

