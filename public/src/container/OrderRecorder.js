import { connect } from 'react-redux';

import OrderRecorder from '../components/orderRecorder';


const mapStateToProps = (state) => {
    return state;
};


const OrderRecorderContainer= connect(mapStateToProps)(OrderRecorder);

export default OrderRecorderContainer;
