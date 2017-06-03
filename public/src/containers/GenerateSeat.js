import {connect} from 'react-redux';
import GenerateSeat from '../components/GenerateSeat';
import actions from '../actions/Seat';

const mapStateToProps = (state)=>{
    return state
};

const mapDispatchToProps = (dispatch)=>{
    return{
        changeSeatStatus:(studioId,i)=>{
            dispatch(actions.location(studioId,i))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(GenerateSeat);