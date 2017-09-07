import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import PostItem from '../../components/PostItem'

const PostsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const PostsList = ({posts, selectPost}) =>
      <PostsWrapper>
          {posts.map((post, index) => (<PostItem key={post.id+index} post={post} selectPost={selectPost} />))}
      </PostsWrapper>

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    note: PropTypes.string,
    username: PropTypes.string,
  })),
  selectPost: PropTypes.func,
}

export default PostsList
