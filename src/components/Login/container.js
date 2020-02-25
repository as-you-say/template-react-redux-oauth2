import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../../actions/_index';
import Login from './component';

function mapStateToProps (state) {
  console.log('Login - state', state);
  return {
    accessToken: state.accessToken
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);