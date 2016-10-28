import React, {Component} from 'react';// eslint-disable-line no-unused-vars

class OrderRecorder extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const user = this.props.loginusername;

        return (
            <div>
                <div className="confirmpay">
                    <div className="welcome-section">

                        <div className="container">
                            <div className="about-grid ">

                                <div className="col-md-8 about-text">

                                    <div className="col-md-4 about-img">
                                        <img src={'../image/cook/18.jpg'} className="img-responsive zoom-img"
                                             style={{marginLeft: '30px', width: '350px', height: '350px'}} alt=""/>
                                    </div>

                                    <div style={{marginLeft: '540px'}}>
                                        <h4>蛋糕名称：{'Tiramisu'}</h4>
                                        <p>订单编号:{'58134343434343434bd545444343'}</p>
                                        <p>昵称:{user}</p>
                                        <p>联系电话: {'13767858585'}</p>
                                        <p>收货地址:{'户县'}</p>
                                        <p>实付价格:{188}元</p>
                                        <p>备注信息:{'草莓味儿的'}</p>
                                        <p>下单日期:{'2016/8/18'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="confirmpay">
                    <div className="welcome-section">

                        <div className="container">
                            <div className="about-grid ">

                                <div className="col-md-8 about-text">

                                    <div className="col-md-4 about-img">
                                        <img src={'../image/cook/14.jpg'} className="img-responsive zoom-img"
                                             style={{marginLeft: '30px', width: '350px', height: '350px'}} alt=""/>
                                    </div>

                                    <div style={{marginLeft: '540px'}}>
                                        <h4>蛋糕名称：{'Mango Mousse'}</h4>
                                        <p>订单编号:{'581343434fdfddffd34bd545444343'}</p>
                                        <p>昵称:{user}</p>
                                        <p>联系电话: {'13767858585'}</p>
                                        <p>收货地址:{'户县'}</p>
                                        <p>实付价格:{188}元</p>
                                        <p>备注信息:{'樱桃味儿的'}</p>
                                        <p>下单日期:{'2015/8/18'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="confirmpay">
                    <div className="welcome-section">

                        <div className="container">
                            <div className="about-grid ">

                                <div className="col-md-8 about-text">

                                    <div className="col-md-4 about-img">
                                        <img src={'../image/cook/5.jpg'} className="img-responsive zoom-img"
                                             style={{marginLeft: '30px', width: '350px', height: '350px'}} alt=""/>
                                    </div>

                                    <div style={{marginLeft: '540px'}}>
                                        <h4>蛋糕名称：{'Hawaii'}</h4>
                                        <p>订单编号:{'581343434fdfddffd34bd545444343'}</p>
                                        <p>昵称:{user}</p>
                                        <p>联系电话: {'13767858585'}</p>
                                        <p>收货地址:{'户县'}</p>
                                        <p>实付价格:{178}元</p>
                                        <p>备注信息:{'多加点牛奶，谢谢'}</p>
                                        <p>下单日期:{'2014/8/18'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderRecorder;