import React, {Component} from 'react';
import Header from './Header';
import MenuH from './MenuH';

class Home extends Component{
    render(){
        return(
            <div>
                <Header
                    title='Home'
                    username={this.props.username}
                    nivel={this.props.nivel}
                />
                <MenuH
                />
                <h1></h1>
            </div>
        )
    }
}

export default Home;