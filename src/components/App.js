import React from 'react';
import Form from './Form';
import Header from './Header';
import Options from './Options';

class MyApp extends React.Component {
    state = {
        options: []
    }
    removeAllOptions = () => {
        this.setState(() => ({
            options: []
        }))
    }
    addOption = (option) => {
        if (!option) {
        return "Add Valid value"   
        } else if(this.state.options.indexOf(option) > -1) {
        return 'This value already exists'
        }
        this.setState((e) => ({
        options: e.options.concat([option])
        }));
    }
    removeSingleOption = (optionToRemove) => {
        this.setState((e) => {
        return {
            options: e.options.filter(option => {
            return optionToRemove !== option;
            })
        };
        })
    }
    componentDidMount = () => {
        try {
            let json = localStorage.getItem('options');
            let options = JSON.parse(json);
        if (options) {
            this.setState(() => {
                return {
                    options: options
                }
            })
        }
        } catch (e) {

        }
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            let json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    render() {
        let title = "To do app",
            subTitle = "First React App";
        return (
        <div className="app-group">
            <Header title={title} subTitle={subTitle}/>
            <Options removeAllOptions={this.removeAllOptions} optionIsHere={this.state.options.length === 0} isHere={this.state.options.length === 0 ? 'No option is here': 'Option is here' } removeSingleOption={this.removeSingleOption} option={this.state.options} />
            <Form addOption={this.addOption} />
        </div>
        );
    }
};

  export default MyApp;