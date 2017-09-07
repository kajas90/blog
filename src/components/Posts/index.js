import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import PostItem from '../../components/PostItem'

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const PostsList = ({posts}) =>
      <PostsWrapper>
        {posts.map((note, index) => (<PostItem key={index} post={post.note} />))}
      </PostsWrapper>

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    note: PropTypes.string
  })),
}

export default PostsList
