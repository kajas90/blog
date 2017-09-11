import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Wrapper = styled.span`
  color: #ffffff;
  background: #000;
  border-radius: 3px;
  margin-left: 10px;
  padding: 5px 10px;
  
  &:first-child {
    margin: 0;
  }
`

class Suggestion extends React.Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onClick(this.props.item)
  }

  render() {
    const { item } = this.props;

    return <Wrapper onClick={this.handleClick}>{item}</Wrapper>
  }
}

Suggestion.propTypes = {
  item: PropTypes.string,
  onClick: PropTypes.func
}


export default Suggestion
