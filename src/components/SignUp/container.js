import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signup } from '../../actions/_index';
import SignUp from './component';

function mapStateToProps (state) {
  console.log('state', state)
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signup }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)