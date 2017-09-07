import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const NoteWrapper = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #dedede;
  width: 100%;
`

const PostItem = ({post}) => <NoteWrapper>{post}</NoteWrapper>

PostItem.propTypes = {
  post: PropTypes.string
}

export default PostItem
