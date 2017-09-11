import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { connect } from 'react-redux';

import { getPost, selectPost } from 'actions/postsActions';

import { selectComments } from '../../selectors/commentsSelector'

import BoxElement from '../../components/BoxElement'
import Comments from '../../components/Comments'
import { Close, Pencil } from '../../components/Icons'

const PageWrapper = styled.section`
  position: relative;
  padding: 20px;
  width: 70%;
`

const SinglePostWrapper = BoxElement.extend`
  font-size: 1.4em;
  border-bottom: 3px solid #34D1BF;
`

const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 20px;
  margin: 0 0 20px;
  border-bottom: 1px solid #fafafa;
`

const PostDetails = styled.span`
  color: #D1345B;
`

const CloseButton = styled.button`
  background: none;
  border: 0;
  margin-left: auto;
  outline: none;
  cursor: pointer;
`

export class Post extends React.Component {

  componentDidMount() {
    this.props.requestPost(this.props.id);
  }

  componentWillReceiveProps(props) {
    if(props.id !== props.post.id) {
      this.props.requestPost(props.id);
    }
  }

  render() {
    const { post, comments, closePost } = this.props;
    return (
      <PageWrapper>
        {post.note &&
        <SinglePostWrapper>
          <PostHeader>
            <PostDetails>
              <Pencil width={12} /> {post.username}
            </PostDetails>
            <CloseButton onClick={closePost}><Close width={20} height={20} /></CloseButton>
          </PostHeader>
          {post.note}
        </SinglePostWrapper>
        }
        {comments && <Comments comments={comments}/>}

      </PageWrapper>
    );
  }
}

Post.propTypes = {
  status: PropTypes.string,
  post: PropTypes.shape({
    id: PropTypes.number,
    note: PropTypes.string,
    username: PropTypes.string,
  }),
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    parent: PropTypes.number,
    author: PropTypes.string,
    content: PropTypes.string,
  })),
  requestPosts: PropTypes.func,
  closePost: PropTypes.func
};

const mapStateToProps = (state) => ({
  status: state.getIn(['post', 'status']),
  post: state.getIn(['post','data']).toJS(),
  comments: selectComments(state, 0)
});

const mapDispatchToProps = (dispatch) => ({
  requestPost: id => dispatch(getPost(id)),
  closePost: () => dispatch(selectPost(0)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
