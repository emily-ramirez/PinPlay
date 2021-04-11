import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './../pinplay.css'

class PlaylistForm extends React.Component{
  cities = ['NYC', 'LA', 'PHX']
  genres = ['none', 'country', 'dance', 'edm', 'hip hop', 'indie-pop', 'latin', 'party', 'pop', 'rap', 'rock-n-roll', 'r&b']

  renderCitySelector = ({ input, meta: { touched, error } }) => (
    <div>
      <select {...input}>
        <option value="">Select an area.</option>
        {this.cities.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  )

  renderGenreSelector = ({ input, meta: { touched, error } }) => (
    <div>
      <select {...input}>
        <option value="">Choose a preferred genre.</option>
        {this.genres.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  )

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }
  render() {
    return(
      <div className={"container"} id={"Form"}>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={"form-horizontal"}>
                    <div className={"form-group"}>
                        <label>Choose a City:</label>
                        <Field name="city" component={this.renderCitySelector}/>
                    </div>
                    <div className={"form-group"}>
                        <label>Allow explicit content?</label>
                        <p>
                            <Field name="explicit" component="input" type="radio" value="True"/>{' '}
                            Yes
                        </p>
                        <p>
                        <Field name="explicit" component="input" type="radio" value="False"/>{' '}
                        No
                        </p>
                    </div>
                    <div className={"form-group"}>
                        <label>Choose a Genre:</label>
                        <Field name="genre" component={this.renderGenreSelector}/>
                    </div>
                    <button type="submit" className={"submit"}>
                        Submit
                    </button>
                </form>
            </div>
    )
  }
}

export default reduxForm({form:'filters'})(PlaylistForm);
/*

*/
