import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import EsnafList from '../EsnafList';


class EsnafPage extends Component {
    static propTypes = {
        esnaf: PropTypes.array.isRequired
    };

    render() {
        console.log(this.props);
        return (
            < div >
            <h2>Esnaf Page</h2>
        <EsnafList esnaf = {this.props.esnaf}></EsnafList>

            < /div>
    ) ;
    }
}

const mapStateToProps = ({ esnaf }) =>  {
    return {
        esnaf
    }
};



export default connect(mapStateToProps) (EsnafPage);