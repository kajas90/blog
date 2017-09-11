import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { connect } from 'react-redux';

import { getPosts, selectPost } from 'actions/postsActions';
import PostsList from 'components/Posts';
const PageWrapper = styled.div`
  position: relative;
  padding: 20px;
  flex-grow: 1;
  -webkit-transition: all 300ms ease-in-out;
  -moz-transition: all 300ms ease-in-out;
  -ms-transition: all 300ms ease-in-out;
  -o-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
`

const Loader = styled.div `
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #fafafa;
  
  & > span {
    animation: blinker 1s linear infinite;
  }
  
  @keyframes blinker {  
    50% { opacity: 0; }
  }
`

export class Posts extends React.Component {

  componentDidMount() {
    this.props.requestPosts();
  }

  render() {
    const { status, posts, selectPost, selectedPost } = this.props;
    return (
      <PageWrapper>
        <PostsList posts={posts} selectPost={selectPost} selected={selectedPost} />
        {status === 'loading' && <Loader><span>{status}</span></Loader>}
      </PageWrapper>
    );
  }
}

Posts.propTypes = {
  status: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    note: PropTypes.string,
    username: PropTypes.string,
  })),
  selectPost: PropTypes.func,
  selectedPost: PropTypes.number
};

const mapStateToProps = (state) => ({
  status: state.getIn(['posts','list','status']),
  posts: state.getIn(['posts','list','data']).toJS(),
  selectedPost: state.getIn(['posts','selected'])

});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: () => dispatch(getPosts()),
  selectPost: id => dispatch(selectPost(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
