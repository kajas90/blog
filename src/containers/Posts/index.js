import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { connect } from 'react-redux';

import { toJS } from 'immutable';

import { getPosts } from 'actions/postsActions';
import PostsList from 'components/Posts';

const PageWrapper = styled.section`
  position: relative;
  padding: 20px;
`

const Loader = styled.div `
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #fff;
  
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
    const { status, posts } = this.props;
    return (
      <PageWrapper>
        <PostsList posts={posts} />
        {status === 'loading' && <Loader><span>{status}</span></Loader>}
      </PageWrapper>
    );
  }
}

Posts.propTypes = {
  status: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    note: PropTypes.string
  })),
  requestPosts: PropTypes.func
};

const mapStateToProps = (state) => ({
  status: state.getIn(['posts','list','status']),
  posts: state.getIn(['posts','list','data']).toJS()
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
