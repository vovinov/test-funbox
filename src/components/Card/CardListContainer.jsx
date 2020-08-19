import { connect } from "react-redux";

import CardList from "./CardList";

const mapStateToProps = (state) => ({
  cards: state.foodReducer.cards,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
