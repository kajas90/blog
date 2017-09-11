import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { connect } from 'react-redux';

import { getPost, selectPost } from 'actions/postsActions';

import { selectComments, selectUsers } from '../../selectors/commentsSelector'

import BoxElement from '../../components/BoxElement'
import Comments from '../../components/Comments'
import CommentForm from '../../components/CommentForm'
import { Close, User, Pencil } from '../../components/Icons'

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
  
  & > .icon {
    margin-right: 5px;
  }
`

const PostDetails = styled.span`
  color: #D1345B;
`

const Button = styled.button`
  background: none;
  border: 0;
  margin-left: auto;
  outline: none;
  cursor: pointer;
 
  & > svg {
    margin-right: 5px;
  }
`

const ActionsWrapper = styled.div`
  border-top: 1px solid #fafafa;
  padding: 10px 0 0;
  margin-top: 10px;
  font-size: 0.8em;
  display: flex;
  color: #34D1BF;
`

export class Post extends React.Component {

  constructor() {
    super()
    this.showForm = this.showForm.bind(this)

    this.state = {
      showForm: false
    }
  }

  componentDidMount() {
    this.props.requestPost(this.props.id);
  }

  componentWillReceiveProps(props) {
    if(props.id !== props.post.id) {
      this.props.requestPost(props.id);
      this.state = { showForm: false }
    }
  }

  showForm() {
    this.setState(state => state.showForm = !state.showForm)
  }

  render() {
    const { post, comments, closePost, users } = this.props;
    return (
      <PageWrapper>
        {post.note &&
        <SinglePostWrapper>
          <PostHeader>
            <PostDetails>
              <User width={12} height={12} /> {post.username}
            </PostDetails>
            <Button onClick={closePost}><Close width={20} height={20} /></Button>
          </PostHeader>
          {post.note}
          <ActionsWrapper>
            <Button onClick={this.showForm} ><Pencil width={10} height={10} />Comment</Button>
          </ActionsWrapper>
        </SinglePostWrapper>
        }

        {this.state.showForm && <CommentForm users={users} />}

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
  closePost: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.string)
};


const mapStateToProps = (state) => ({
  status: state.getIn(['post', 'status']),
  post: state.getIn(['post','data']).toJS(),
  comments: selectComments(state, 0),
  users: selectUsers(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestPost: id => dispatch(getPost(id)),
  closePost: () => dispatch(selectPost(0)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
