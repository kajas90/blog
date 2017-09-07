import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { connect } from 'react-redux';

import { getPost } from 'actions/postsActions';

const PageWrapper = styled.section`
  position: relative;
  padding: 20px;
  width: 50%;
`

export class Post extends React.Component {

  render() {
    const { post } = this.props
    return (
      <PageWrapper>
        {post.id}
      </PageWrapper>
    );
  }
}

Post.propTypes = {
  status: PropTypes.string,
  post: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    note: PropTypes.string,
    username: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      parent: PropTypes.number,
      author: PropTypes.string,
      content: PropTypes.string,
    }))
  })),
  requestPosts: PropTypes.func
};

const mapStateToProps = (state) => ({
  status: state.getIn(['post', 'status']),
  post: state.getIn(['post','data']).toJS()
});

const mapDispatchToProps = (dispatch) => ({
  requestPost: () => dispatch(getPost())
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
