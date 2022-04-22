import React, { Component } from 'react';
import JournalList from "./journals/journal_list";
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>MarkIV Props,State and Deep Dive</h1>
        <h2>Thursday 21, 2022</h2>
        <JournalList both="List 1"/>
        <JournalList both="List 2"/>
      </div>
    );
  }
}
