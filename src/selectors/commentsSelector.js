export const selectComments = (state, parent) => {
  return state.getIn(['post','data','comments']).filter(item => item.get('parent') === parent).toJS()
}

export const selectUsers = state => {
  return state.getIn(['post','data','comments']).map(item => item.get('author')).toSet().toJS()
}


export const selectTags = state => {
  const regex = /#([a-zA-Z]*)*/g;
  let tags = []
   state.getIn(['post','data','comments']).forEach(item => {
     let results = null;
     while(results = regex.exec(item.get('content'))) {
       tags.push(results[1])
     }

   })

  return tags;
}
