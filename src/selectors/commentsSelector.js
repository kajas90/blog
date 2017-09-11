import { findTags } from '../regexes'

export const selectComments = (state, parent) => {
  return state.getIn(['post','data','comments']).filter(item => item.get('parent') === parent).toJS()
}

export const selectUsers = state => {
  return state.getIn(['post','data','comments']).map(item => item.get('author')).toSet().toJS()
}


export const selectTags = state => {
  let tags = []
   state.getIn(['post','data','comments']).forEach(item => {
     let results = null;
     while(results = findTags.exec(item.get('content'))) {
       tags.push(results[1])
     }

   })

  return tags;
}
