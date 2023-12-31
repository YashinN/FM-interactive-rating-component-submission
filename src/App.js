import { useReducer } from "react";

import LayoutMain from "./components/LayoutMain";
import CardLayout from "./components/CardLayout";
import RatingScreen from "./components/RatingScreen";
import MessageScreen from "./components/MessageScreen";

const initialState = {
  rating: null,
  isSubmit: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setRating":
      return { ...state, rating: action.payload };
    case "setSubmit":
      return {
        ...state,
        isSubmit: state.rating === null ? state.isSubmit : true,
      };
    default:
      throw new Error("Action Unknown");
  }
};

function App() {
  const [{ rating, isSubmit }, dispatch] = useReducer(reducer, initialState);

  return (
    <LayoutMain>
      <CardLayout isSubmit={isSubmit}>
        {!isSubmit && <RatingScreen dispatch={dispatch} currRating={rating} />}
        {isSubmit && <MessageScreen rating={rating} />}
      </CardLayout>
    </LayoutMain>
  );
}

export default App;
