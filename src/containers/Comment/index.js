import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { connect } from 'react-redux';

import { selectComments } from '../../selectors/commentsSelector'


import Comments from '../../components/Comments'
import { User } from '../../components/Icons'


const ItemWrapper = styled.div`
  color: #7A7474;
`

const AnswersWrapper = styled.div`
  padding-left: 20px;
  background: #fafafa;
`

const UserLine = styled.div`
  color: #34D1BF;
  padding: 10px 10px 0;
  
  & > svg {
    margin-right: 5px;
  }
`

const Content = styled.div`
  margin: 0 10px;
  padding: 10px 0; 
  border-bottom: 1px solid #fafafa;
`



class Comment extends React.Component {

  render() {
    const { comment, children } = this.props
    return (
      <ItemWrapper>
        <UserLine><User width={10} height={10} />{comment.author}</UserLine>
        <Content>{comment.content}</Content>
      {children.length > 0 && <AnswersWrapper>
        <Comments comments={children} />
      </AnswersWrapper>}
      </ItemWrapper>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    author: PropTypes.string,
    parent: PropTypes.number
  }),
  children: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    author: PropTypes.string,
    parent: PropTypes.number
  }))
}

const mapStateToProps = (state, ownProps) => ({
  children: selectComments(state, ownProps.comment.id)
});


export default connect(mapStateToProps)(Comment);
