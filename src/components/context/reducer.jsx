

export function reducer(state, action) {
  switch (action.type) {
    case "AddToWatchList":
      return {
        data: [...state.data, action.payload],
      };
    case "RemoveFromWatchList":
        return {
            data: [...state.data.filter((movie)=>{
                return movie.id !== action.payload.id;
            })],
          };
    default:
      return state;
  }
}
