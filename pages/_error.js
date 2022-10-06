import React from 'react'
import ErrorNext from 'next/error'

export default class Error extends React.Component {

    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode }
    }

    render() {
        return (
            <div style={{position: "relative", zIndex: 8}}>
               <ErrorNext statusCode={this.props.statusCode} />
            </div>
        )
    }
}