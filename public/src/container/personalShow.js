import { connect } from 'react-redux';

import personalShow from '../components/personalShow';


const mapStateToProps = (state) => {
    return state;
};


const PersonalShowContainer= connect(mapStateToProps)(personalShow);

export default PersonalShowContainer;
