import CreateTest from '../../views/CreateTest';
import { saveAndRun } from '../../action_creators/test';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
   return { token: state.token, result: state.result } 
}

function mapDispatchToProps(dispatch) {
    return {
        saveAndRun: bindActionCreators(saveAndRun, dispatch),
    };
}

const CreateTestContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTest);
export default CreateTestContainer;