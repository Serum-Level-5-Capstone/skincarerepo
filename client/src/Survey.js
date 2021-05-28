import React,  {useState} from "react";
import axios from "axios";

//Onsubmit for survey and routed to Results component with the results. 
export default function Survey(){
  //Should I make a form here instead, to be simplest DRY code?
    questions: [

        
        {
            name: "question 1",
            title: "This is the page {pageno} of {pagecount}.",
            elements: [
              { type: "text", name: "What is your skin type? (Dry, combination,normal, sensitive, or oily) ",  placeHolder:"Provide your answer", isRequired: true}
            ]
        },
        
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
        }
      ]
     

  return(
    <p>hiya</p>
  )
}
