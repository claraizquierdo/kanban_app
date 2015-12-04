import React from 'react';
import Button from 'react-toolbox/lib/button';

export default class Note extends React.Component {
  render() {
    return <div>{this.props.task} <Button label='Bookmark' raised primary /></div>;
  }
}