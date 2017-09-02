import Register from '../../views/Register/';
import { register } from '../../action_creators/auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
    // TODO trim this down
   return { ...state } 
}

function mapDispatchToProps(dispatch) {
    return {
        register: bindActionCreators(register, dispatch),
    };
}

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);
export default RegisterContainer;