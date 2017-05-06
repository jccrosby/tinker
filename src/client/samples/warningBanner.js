import React from 'react';

export default class WarningBanner extends React.Component{

    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.warn) {
            return <div className="warn">Warning!</div>;
        } else {
            return null;
        }
    }
}
