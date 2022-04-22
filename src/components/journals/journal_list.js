import React, {Component} from "react";
import {JournalEntry} from "./Journal entry"

const rawJournalData = [
    {title: "Post one", content: "Post content", status: "draft" },
    {title: "Post one", content: "Post content", status: "published" },
    {title: "Post one", content: "Post content", status: "published" },
    {title: "Post one", content: "Post content", status: "published" },

]



// Class component
export default class JournalList extends Component {
    constructor(props){
        super(props);

        this.state = {
            journalData: rawJournalData,
            greeting: "The suit is at 80 percent power",
            isOpen: true
        };
    }
    render(){
        return(
            <div>
                <h2>{this.props.heading}</h2>
                <JournalEntry title="Some title" content= "More content"/>
                <JournalEntry title="Some title" content= "More content"/>
            </div>
        );
       
            
        
    }



}