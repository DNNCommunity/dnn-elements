import { Component, Host, h } from '@stencil/core';

/** Do not use this component in production, it is meant for testing purposes only and is not distributed in the production package. */
@Component({
  tag: 'dnn-example-form',
  styleUrl: 'dnn-example-form.scss',
})
export class DnnExampleForm {

  render() {
    return (
      <Host>
        <h2>This is a sample form</h2>
        <p>It includes dnn elements commonly used in forms.</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.group("Form submitted");
            console.log(e);
            console.groupEnd();
            console.group("Form data");
            const formData = new FormData(e.target as HTMLFormElement);
            formData.forEach((value, key) => {
              console.log(key, value);
            });
            console.groupEnd();
          }}
        >
          <fieldset>
            <legend>User Information</legend>
            <dnn-input
              label="First Name"
              type="text"
              required
              name="firstName"
            />
            <dnn-input
              label="Last Name"
              type="text"
              required
              name="lastName"
            />
            <dnn-input
              label="Email"
              type="email"
              required
              helpText='We will never share your email with anyone else.'
              name="email"
            />
            <dnn-input
              label="Password"
              type="password"
              required
              minlength={8}
              allowShowPassword
              helpText='Your password must be at least 8 characters long.'
              name="password"
            />
            <dnn-input
              label="Confirm Password"
              type="password"
              required
              minlength={8}
              allowShowPassword
              helpText='Please confirm your password.'
              name="confirmPassword"
            />
            <dnn-input
              label="Phone"
              type="tel"
              pattern="\d{3}[\-]\d{3}[\-]\d{4}"
              required
              helpText='Please enter your phone number in the format 123-456-7890.'
              name="phone"
            />
            <dnn-input
              label="Date of Birth"
              type="date"
              required
              name="dateOfBirth"
            />
            <dnn-input
              label="Date and Time of Birth"
              type="datetime-local"
              helpText="If you have such a good memory... (optional)"
              name="dateTimeOfBirth"
            />
            <dnn-input
              type="number"
              label="Age"
              min={0}
              max={115}
              name="age"
            />
            <dnn-input
              label="Notification Time"
              type="time"
              helpText="Optionaly indicate your preferred time for notifications."
              name="notificationTime"
            />
            <dnn-input
              label="Website"
              type="url"
              helpText="Please enter the URL of your website."
              name="website"
            />
              <dnn-checkbox name="rememberMe" value="true">
                Remember me
              </dnn-checkbox>
            <dnn-color-input
              label="Favorite Color"
              name="favoriteColor"
            />
            <dnn-select
              label="Gender"
              helpText="Optional"
              name="gender"
            >
              <option value="">--- Select ---</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Prefer not to say</option>
            </dnn-select>
            <label>
              Subscribe to our newsletter
              <dnn-toggle name="subscribe"/>
            </label>
            <label class="vertical">
              Your Resume
              <dnn-dropzone name="resume" />
            </label>
            <label class="vertical">
              Your profile Picture
              <dnn-image-cropper name="profilePic" />
            </label>
            <label class="vertical">
              Some code
              <dnn-monaco-editor name="code" value="<p>Some html</p>" />
            </label>
          </fieldset>
          <div class="controls">
            <dnn-button reversed formButtonType="reset">Reset</dnn-button>
            <dnn-button formButtonType="submit">Submit</dnn-button>
          </div>
        </form>
      </Host>
    );
  }

}
