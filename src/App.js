import React, {Component} from 'react';
import _ from 'lodash'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'

import './App.css'
import { Link, Route } from 'react-router-dom'
import MoviesPage from './components/pages/MoviesPage'
import EsnafPage from './components/pages/EsnafPage'
import Footer from './components/Footer'
import Header from './components/Header'
class App extends Component {


    handleOverlayRef = (c) => {
        const { overlayRect } = this.state

        if (!overlayRect) {
            this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
        }
    }



    render() {


        return (

            <div className = "App" >
            <Header/>
        <Container text>
            <Route path = '/movies'  component={MoviesPage} ></Route>
            <Route path = '/esnaf'  component={EsnafPage} ></Route>
            <hr/>
        </Container>
            <Footer/>
            </div>
    )
        ;
    }
}

export default App;


