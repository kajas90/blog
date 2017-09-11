import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import BoxElement from '../BoxElement'
import { User } from '../Icons'

const NoteAside = styled.aside`
  border-top: 1px solid #fafafa;
  margin-top: 10px;
  padding: 5px 0 0 0;
  font-size: 0.8em;
  color: #D1345B;
  font-weight: bold;
`

const Username = styled.span`
  margin-left: 5px;
`

const PostBox = BoxElement.extend`
  ${props => props.selected ? 'border-bottom: 2px solid #34D1BF' : ''}
`

class PostItem extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.selectPost(this.props.post.id)
  }

  render() {
    const {post, selected} = this.props
    return (
      <PostBox onClick={this.handleClick} selected={selected}>
      {post.note}
      <NoteAside>
        <User height={10} width={10}/>
        <Username>{post.username}</Username>
      </NoteAside>
    </PostBox>
    )
  }
}

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    note: PropTypes.string,
    username: PropTypes.string,
  }),
  selectPost: PropTypes.func,
  selected: PropTypes.bool
}

export default PostItem
