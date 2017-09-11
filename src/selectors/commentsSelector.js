export const selectComments = (state, parent) => {
  return state.getIn(['post','data','comments']).filter(item => item.get('parent') === parent).toJS()
}
