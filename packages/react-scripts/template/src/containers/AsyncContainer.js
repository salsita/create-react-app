import { connect } from 'react-redux';

import Async from '../components/Async';
import buildActionCreators from '../helpers/buildActionCreators';
import * as ActionTypes from '../constants/actionTypes';
import * as AsyncSelectors from '../selectors/asyncSelectors';

const mapStateToProps = state => ({
  greeted: AsyncSelectors.isGreeted(state),
  user: AsyncSelectors.getUser(state)
});

export default connect(
  mapStateToProps,
  buildActionCreators({
    onSayHello: ActionTypes.SAY_HELLO
  })
)(Async);
