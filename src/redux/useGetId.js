const initinalState = {
  id: "slug",
};

export function useGetId(state = initinalState, action) {
  if ((action.type = "SET")) {
    localStorage.setItem("id", action.payload);
    return { ...state, id: action.payload };
  } else {
    return state;
  }
}
