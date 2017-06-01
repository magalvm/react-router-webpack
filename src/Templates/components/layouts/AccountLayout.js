import React, {Component} from 'react'
// import {connect} from 'react-redux'

import './AccountLayout.css'

class accountLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainMenu: (this.props.route && this.props.route.mainMenu) || true,
            user: this.props.user
        };

        // this.props.getAccount();
    }

    render() {
        return (
            <div className="wrapper-account">
                {this.props.children}
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     const {auth} = state;
//     return {
//         user: auth ? auth.user : null,
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getAccount: () => {dispatch(accountAction.account.getAccount())} // Get logged in user. the user can be logged in and refresh the page.
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(mainMenu);
export default accountLayout;

