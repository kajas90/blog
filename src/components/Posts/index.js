import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import PostItem from '../../components/PostItem'

const PostsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`

const PostsList = ({posts}) =>
      <PostsWrapper>
        <Column>
          {posts.map((post, index) => (<PostItem key={post.id+index} post={post} />))}
        </Column>
      </PostsWrapper>

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    note: PropTypes.string,
    username: PropTypes.string,
  })),
}

export default PostsList
