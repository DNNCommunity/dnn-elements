import { Component, Host, h } from '@stencil/core';

/** Do not use this component in production, it is meant for testing purposes only and is not distributed in the production package. */
@Component({
  tag: 'dnn-example-form',
  styleUrl: 'dnn-example-form.scss',
})
export class DnnExampleForm {
  private fieldset: HTMLDnnFieldsetElement;

  render() {
    return (
      <Host>
        <dnn-fieldset
          class="full-form-width"
          ref={el => this.fieldset = el}
          label="Sample Form"
          helpText="This is some help text."
        >
          <div slot="label-prefix">
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="m120-200 180-280-180-280h480q20 0 37.5 9t28.5 25l174 246-174 246q-11 16-28.5 25t-37.5 9H120Zm146-80h334l142-200-142-200H266l130 200-130 200Zm130-200L266-680l130 200-130 200 130-200Z"/>
            </svg>
          </div>
          <div slot="label-suffix">
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
            >
              <path d="M480-79q-16 0-30.5-6T423-102L102-423q-11-12-17-26.5T79-480q0-16 6-31t17-26l321-321q12-12 26.5-17.5T480-881q16 0 31 5.5t26 17.5l321 321q12 11 17.5 26t5.5 31q0 16-5.5 30.5T858-423L537-102q-11 11-26 17t-31 6Zm0-80 321-321-321-321-321 321 321 321Zm-40-281h80v-240h-80v240Zm40 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Zm0-160Z"/>
            </svg>
          </div>
          <h2>This is a sample form</h2>
          <p>It includes dnn elements commonly used in forms.</p>
          <button onClick={() => this.fieldset.setFocused()}>Focus</button>
          <button onClick={() => this.fieldset.setBlurred()}>Blur</button>
          <button onClick={() => this.fieldset.disable()}>Disable</button>
          <button onClick={() => this.fieldset.enable()}>Enable</button>
          <button onClick={() => this.fieldset.setValidity(false, "Field is not valid!")}>Set Invalid</button>
          <button onClick={() => this.fieldset.setValidity(true)}>Set Valid</button>
          <button onClick={() => this.fieldset.pinLabel()}>Pin Label</button>
          <button onClick={() => this.fieldset.unpinLabel()}>Unpin Label</button>
        </dnn-fieldset>
        <form
          onSubmit={e => {
            e.preventDefault();
            /* eslint-disable no-console */
            console.group("Form submitted");
            console.log(e);
            console.groupEnd();
            console.group("Form data");
            const formData = new FormData(e.target as HTMLFormElement);
            formData.forEach((value, key) => {
              console.log(key, value);
            });
            console.groupEnd();
            /* eslint-enable no-console */
          }}
        >
          <dnn-fieldset label="User Information">
            <div class="fields">
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
                helpText="If you have any..."
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
              <dnn-textarea
                label="Review"
                name="review"
                value="This is a review."
                helpText="Please enter your review."
                required
              />
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
              <label class="vertical">
                Biography
                <dnn-richtext name="biography" value="<p>Some html</p>" />
              </label>
            </div>
          </dnn-fieldset>
          <div class="controls">
            <dnn-button reversed formButtonType="reset">Reset</dnn-button>
            <dnn-button formButtonType="submit">Submit</dnn-button>
          </div>
        </form>
      </Host>
    );
  }

}
