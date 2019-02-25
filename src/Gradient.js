import React, { Component } from 'react';
import { Text } from 'ink';
import gradientString from 'gradient-string';
import stripAnsi from 'strip-ansi';
import PropTypes from 'prop-types';

export default class Gradient extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    name: PropTypes.oneOf([
      'cristal',
      'teen',
      'mind',
      'morning',
      'vice',
      'passion',
      'fruit',
      'instagram',
      'atlas',
      'retro',
      'summer',
      'pastel',
      'rainbow'
    ]),
    colors: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
      ])
    )
  };

  render() {
    const gradient = this.props.name ? gradientString[this.props.name] : gradientString(this.props.colors);
    const applyGradient = text => gradient.multiline(stripAnsi(text));
    return (
      <Text unstable__transformChildren={applyGradient}>{this.props.children}</Text>
    )
  }
}
