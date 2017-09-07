import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const NoteWrapper = styled.article`
  padding: 10px;
  background: #ffffff;
  -webkit-box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.4);
  box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.4);
  margin-bottom: 10px;
  width: 100%;
`

const PostItem = ({post}) => <NoteWrapper>
  {post.note}
  <aside>
    {post.username}
  </aside>
</NoteWrapper>

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    note: PropTypes.string,
    username: PropTypes.string,
  })
}

export default PostItem
