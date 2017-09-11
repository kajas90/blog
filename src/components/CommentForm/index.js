import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { connect } from 'react-redux';

import { selectUsers, selectTags } from '../../selectors/commentsSelector';
import { findLastUsername, findLastTag } from '../../regexes'

import { addComment } from 'actions/postsActions';

import Suggestion from '../../components/Suggestion';


const Form = styled.form`
  padding: 10px 0;
`

const Input = styled.textarea`
  background: #ffffff;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  border: 1px solid #ededed;
  outline: none;
  resize: none;
`

const Submit = styled.button`
  background: #D1345B;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  border-radius: 3px;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
`

const Suggestions = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
`

class CommentForm extends React.Component {

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.assignUser = this.assignUser.bind(this)
    this.addTag = this.addTag.bind(this)

    this.state = {
      suggestions: [],
      tagSuggestions: [],
      text: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.text.length > 0) {
      this.props.addComment(this.state.text);
      this.setState({
        suggestions: [],
        tagSuggestions: [],
        text: ''
      })
    }
  }

  handleChange(e) {
    const suggestions = this.suggestUser(e.target.value, this.props.users);
    const tagsSuggestions = this.suggestTag(e.target.value, this.props.tags);
    this.setState({suggestions: suggestions, tagSuggestions: tagsSuggestions, text: e.target.value})
  }

  suggestUser(text, users) {
    const result = findLastUsername.exec(text)
    if(result) {
      return users.filter(item => item.indexOf(result[1]) > -1)
    } else {
      return []
    }
  }

  suggestTag(text, tags = []) {
    const result = findLastTag.exec(text)
    if(result) {
      return tags.filter(item => item.indexOf(result[1]) > -1)
    } else {
      return []
    }
  }

  assignUser(user) {
    this.setState(state => ({text: state.text.replace(findLastUsername, `@${user} `), suggestions: []}));
    this.commentInput.focus();
  }

  addTag(tag) {
    this.setState(state => ({text: state.text.replace(findLastTag, `#${tag} `), tagSuggestions: []}));
    this.commentInput.focus();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input innerRef={(input) => { this.commentInput = input; }}  onChange={this.handleChange} value={this.state.text}></Input>
        <Submit>post comment</Submit>
        {this.state.suggestions.length > 0 &&
        <Suggestions>
          {this.state.suggestions.map(item => <Suggestion key={item} item={item} onClick={this.assignUser} />)}
        </Suggestions>}
        {this.state.tagSuggestions.length > 0 &&
        <Suggestions>
          {this.state.tagSuggestions.map(item => <Suggestion key={item} item={item} onClick={this.addTag} />)}
        </Suggestions>}
      </Form>
    )
  }
}

CommentForm.propTypes = {
  users: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string),
  addComment: PropTypes.func
}

const mapStateToProps = (state) => ({
  users: selectUsers(state),
  tags: selectTags(state)
});

const mapDispatchToProps = (dispatch) => ({
  addComment: text => dispatch(addComment(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
