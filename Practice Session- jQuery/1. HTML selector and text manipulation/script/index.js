let selectedDiv = $(".raw__div");
let selectedBtn = $(".btn");
let selectedHeading = $(".heading1");
let selectedPara = $(".para1");

$(".raw__div .heading1").text("Dear Zahan...!!!");

//selectedBtn.text("This is new btn");

let newParagraph = $("<p></p>").html("I'm new Paragraph.");
selectedPara.after(newParagraph);

selectedPara.append(` "I'm added Text"`);
selectedPara.prepend(`"I'm added Text" `);
