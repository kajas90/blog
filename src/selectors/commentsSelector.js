export const selectComments = (state, parent) => {
  return state.getIn(['post','data','comments']).filter(item => item.get('parent') === parent).toJS()
}

export const selectUsers = state => {
  return state.getIn(['post','data','comments']).map(item => item.get('author')).toSet().toJS()
}
