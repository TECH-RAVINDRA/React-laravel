import React, { Component } from 'react';

class Test extends Component {
    render() {
        return (
            <div className="Test">
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-12 d-flex no-block align-items-center">
                            <h4 className="page-title">Home</h4>
                            <div className="ml-auto text-right">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href>Home</a></li>
                                     </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="container-fluid">
                </div>
            </div>
        );
    }
}


export default Test;
