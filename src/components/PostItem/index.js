import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const NoteWrapper = styled.article`
  padding: 20px;
  background: #ffffff;
  -webkit-box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.4);
  box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.4);
  margin-bottom: 10px;
  width: 100%;
`

const NoteAside = styled.aside`
  border-top: 1px solid #fafafa;
  margin-top: 10px;
  padding: 5px 0 0 0;
  font-size: 0.8em;
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
    const {post} = this.props
    return (<NoteWrapper onClick={this.handleClick}>
      {post.note}
      <NoteAside>
        {post.username}
      </NoteAside>
    </NoteWrapper>)
  }
}

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    note: PropTypes.string,
    username: PropTypes.string,
  }),
  selectPost: PropTypes.func,
}

export default PostItem
