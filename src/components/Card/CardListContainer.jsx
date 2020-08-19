import { connect } from "react-redux";
import { toggleSelectCardAC } from "../../reducers/foodReducer";

import CardList from "./CardList";

const mapStateToProps = (state) => ({
  cards: state.foodReducer.cards,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSelect: (cardId) => {
      dispatch(toggleSelectCardAC(cardId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
