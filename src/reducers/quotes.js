export default (state = [], action) => {
  let idx;
  let quote;
  switch (action.type) {
    case "ADD_QUOTE":
      console.log('add quote reducer')
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      console.log("inside reducer for remove quote")
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "UPVOTE_QUOTE":
      console.log("inside reducer for upvote quote")
      quote = state.find(quote => quote.id === action.quoteId)
      console.log(quote)
      quote.votes += 1
      return state

    case "DOWNVOTE_QUOTE":
      console.log("inside reducer for downvote quote")

      quote = state.find(quote => quote.id === action.quoteId)
      if (quote.votes > 0) {
        quote.votes -= 1
      }
      return state

    default:
      return state
  }
}