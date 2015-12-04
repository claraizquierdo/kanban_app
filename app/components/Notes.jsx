import React from 'react';
import Note from './Note.jsx';

export default class Notes extends React.Component {
  render() {
    return (
      <div>
        <ul>{this.props.items.map(this.renderNote)}</ul>
      </div>
    );
  }
  renderNote(note) {
    return (
      <li key={note.id}>
        <Note task={note.task} />
      </li>
    );
  }
}