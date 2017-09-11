import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import Comment from '../../containers/Comment'

const Wrapper = styled.section`
  background: #ffffff;
  border-top: 6px solid #fafafa;
`

const Comments = ({ comments }) =>
  <Wrapper>
    {comments.map((comment, index) => (<Comment key={comment.id+index} comment={comment} />))}
  </Wrapper>

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    parent: PropTypes.number,
    author: PropTypes.string,
    content: PropTypes.string,
  }))
}

export default Comments
