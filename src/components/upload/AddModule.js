import React from 'react';
import ReactDOM from 'react-dom';
import styles from './AddModule.module.css'

class AppModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coursename: '',
      module: '',
      exercise: '',
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
        <div className={styles.form__container}>
            <form onSubmit={this.mySubmitHandler}>
            <div className={styles.course__name}>
                <p>Enter Course Name:</p>
                <input
                    type='text'
                    name='coursename'
                    onChange={this.myChangeHandler}
                />
            </div>
            <div className={styles.module__name}>
                <p>Enter Module:</p>
                <input
                    type='text'
                    name='module'
                    onChange={this.myChangeHandler}
                />
            </div>
            <div className={styles.exercise}>
                <p>Enter Exercise:</p>
                <textarea
                    value={this.state.exercise}
                    name='exercise'
                    onChange={this.myChangeHandler}
                />
            </div>
            <br/>
            <br/>
            <input className={styles.submit} type='submit' />
            </form>
        </div>
    );
  }
};

export default AppModule;
