import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PlaylistForm extends React.Component{
  cities = ['NYC', 'LA', 'PHX']
  genres = ['none', 'country', 'dance', 'edm', 'hip-hop', 'indie-pop', 'latin', 'party', 'pop', 'rap', 'rock-n-roll', 'r&b']

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
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div>
            <label>Choose a City</label>
            <Field name="city" component={this.renderCitySelector} />
          </div>
          <div>
            <label>Allow explicit content?</label>
            <Field name="explicit" component="input" type="radio" value="True" />{' '}
            Yes
            <Field name="explicit" component="input" type="radio" value="False" />{' '}
            No
          </div>
          <div>
            <label>Choose a Genre</label>
            <Field name="genre" component={this.renderGenreSelector} />
          </div>
          <button type="submit">
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
