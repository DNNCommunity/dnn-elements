import { Component, Host, h } from '@stencil/core';

/** Do not use this component in production, it is meant for testing purposes only and is not distributed in the production package. */
@Component({
  tag: 'dnn-example-form',
  styleUrl: 'dnn-example-form.scss',
  shadow: true,
})
export class DnnExampleForm {

  render() {
    return (
      <Host>
        <h2>This is a sample form</h2>
        <p>It includes dnn elements commonly used in forms.</p>
        <form>
          <fieldset>
            <legend>User Information</legend>
            <dnn-input
              label="First Name"
              type="text"
              required
            />
            <dnn-input
              label="Last Name"
              type="text"
              required
            />
            <dnn-input
              label="Email"
              type="email"
              required
              helpText='We will never share your email with anyone else.'
            />
            <dnn-input
              label="Password"
              type="password"
              required
              minlength={8}
              allowShowPassword
              helpText='Your password must be at least 8 characters long.'
            />
            <dnn-input
              label="Confirm Password"
              type="password"
              required
              minlength={8}
              allowShowPassword
              helpText='Please confirm your password.'
            />
            <dnn-input
              label="Phone"
              type="tel"
              pattern="\d{3}[\-]\d{3}[\-]\d{4}"
              required
              helpText='Please enter your phone number in the format 123-456-7890.'
            />
            <dnn-input
              label="Date of Birth"
              type="date"
              required
            />
            <dnn-input
              label="Date and Time of Birth"
              type="datetime-local"
              helpText="If you have such a good memory... (optional)"
            />
            <dnn-input
              type="number"
              label="Age"
              min={0}
              max={115}
            />
            <dnn-input
              label="Notification Time"
              type="time"
              helpText="Optionaly indicate your preferred time for notifications."
            />
            <dnn-input
              label="Website"
              type="url"
              helpText="Please enter the URL of your website."
            />
            <label>
              <dnn-checkbox />
              Remember me
            </label>
            <dnn-color-input
              label="Favorite Color"
            />
            <dnn-select
              label="Gender"
              helpText="Optional"
            >
              <option value="">--- Select ---</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Prefer not to say</option>
            </dnn-select>
            <label>
              Subscribe to our newsletter
              <dnn-toggle />
            </label>
            <label class="vertical">
              Your Resume
              <dnn-dropzone />
            </label>
            <label class="vertical">
              Your profile Picture
              <dnn-image-cropper />
            </label>
          </fieldset>
          <div class="controls">
            <dnn-button reversed>Cancel</dnn-button>
            <dnn-button>Submit</dnn-button>
          </div>
        </form>
      </Host>
    );
  }

}
