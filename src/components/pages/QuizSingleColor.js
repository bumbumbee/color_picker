import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions/colorActions'
import color from 'color'

class QuizSingleColor extends React.Component {
    state = {
        errors: 0,
        correct: 0,
        level: 1,
        modifiedColor: color(this.props.active.hex).darken(0.5),
        colorChange: 0.5,
        clicks: 0,
    };

    componentDidMount = () => {
        // for (let x = 1; x < 60; x++) {
        //     this.setState({clicked: this.state.clicked.push(false)});
        // }
        this.setState({clicked: false});
        //  console.log(this.state.clicked);
    };

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextState.level !== this.state.level;
    };

    countClicks = (e) => {
        let clicks = this.state.clicks;
        let errors = this.state.errors;
        let correct = this.state.correct;
        let level = this.state.level;
        // let [clicks,errors,correct,level]=this.state;

        if (e.target.style.backgroundColor === this.props.active.rgb) {
            errors++;
            clicks++
        } else {
            correct++;
            clicks++
        }

        if (errors === 5) {
            alert('oh no');
            this.props.history.push('/quiz')
        }

        if (clicks > 5 && e.target.style.backgroundColor === this.props.active.rgb) {
            alert('5 squares already picked');
            errors--;
            clicks--
        } else if (clicks > 5 && e.target.style.backgroundColor !== this.props.active.rgb) {
            alert('5 squares already picked');
            correct--;
            clicks--
        }
        console.log('errors' + errors, 'correct' + correct, 'level' + level, "clicks" + clicks);
        this.setState({errors, correct, clicks});
    };

    nextLevel = () => {
        let level = this.state.level;
        let modifiedColor = this.state.modifiedColor;
        const hex = this.props.active.hex;

        if (this.state.clicks < 5) return alert('please pick 5 squares');

        // levels and colors
        let colorChange = this.state.colorChange;
        colorChange -= 0.05;
        level++;
        if (level % 2 === 0) modifiedColor = color(hex).lighten(colorChange);
        if (level % 2 === 1) modifiedColor = color(hex).darken(colorChange);
        //console.log(colorChange, level);

        if (level > 10) {
            alert('congrats');
            level--;
            this.props.history.push('/quiz')
        }

        this.setState({level, modifiedColor, colorChange, clicks: 0});
        this.props.setBestLevel(this.props.active.title, level);
    };

    render() {
        const blocksArray = [];
        for (let x = 0; x < 60; x++) {
            blocksArray.push(<div/>);
        }

        // random block on each line
        const random = [
            Math.floor((Math.random() * 10) + 1),
            Math.floor((Math.random() * 10) + 20),
            Math.floor((Math.random() * 10) + 30),
            Math.floor((Math.random() * 10) + 40),
            Math.floor((Math.random() * 10) + 50)
        ];

        const table = blocksArray.map((block, i) => {
            return (
                <div className="block"
                     key={i}
                     style=
                         {
                             i === random[0] ||
                             i === random[1] ||
                             i === random[2] ||
                             i === random[3] ||
                             i === random[4] ?
                                 {background: this.state.modifiedColor} : {background: this.props.active.hex}}
                     onClick={this.countClicks}
                >{block}</div>
            )
        });

        return (
            <div className="Quiz-current">
                <div className="form">
                    <div className="table">
                        {table}
                    </div>

                    <div className="button"
                         onClick={this.nextLevel}
                         style={{
                             color: this.props.active.hex,
                             border: "1px solid " + this.props.active.hex
                         }}>next
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        colors: state.colors,
        active: state.active,
    }
};

export default connect(mapStateToProps, actions)(QuizSingleColor)