import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCurrentUser } from '../../actions/_index';
import Profile from './component';

function mapStateToProps (state) {
  return {
    currentUser: state.user.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCurrentUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)