import React,  {useState} from "react";
import axios from "axios";

// Maya The Bee will work on this survey component 
export default function Survey(){
 const questions = { 
    questions: [
        
        {
            name: "question 1",
            title: "This is the page {pageno} of {pagecount}.",
            elements: [
              { type: "text", name: "What is your skin type? (Dry, combination,normal, sensitive, or oily) ",  placeHolder:"Provide your answer", isRequired: true}
            ]
        },
        ,
        {
            name: "question 2",
            title: "This is the page {pageno} of {pagecount}.",
            elements: [
              { type: "text", name: `Are you pregnant or breast-feeding?`,  placeHolder:"Provide your answer", isRequired: true}
            ]
        },
        {
            name: "question 3",
            title: "This is the page {pageno} of {pagecount}.",
            elements: [
              { type: "text", name: "What is your Full name? ",  placeHolder:"Provide your answer", isRequired: true},
            ]
        },
      ]
      // ,completedHtml: `<p><h4>Thank you for sharing this information with us.</h4></p>`
}
  return(
    <p>hiya</p>
  )
}
