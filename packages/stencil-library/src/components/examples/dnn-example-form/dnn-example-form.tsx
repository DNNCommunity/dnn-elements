import { Component, Host, h, State } from '@stencil/core';
import { DnnAutocompleteSuggestion } from '../../dnn-autocomplete/types';

/** Do not use this component in production, it is meant for testing purposes only and is not distributed in the production package. */
@Component({
  tag: 'dnn-example-form',
  styleUrl: 'dnn-example-form.scss',
})
export class DnnExampleForm {
  @State() resume?: File;
  @State() profilePicData?: string;
  @State() profilePicConfirmed = false;

  private fieldset!: HTMLDnnFieldsetElement;
  private characterPicker!: HTMLDnnAutocompleteElement;
  
  @State() filteredUsers: DnnAutocompleteSuggestion[] = [];

  private users: DnnAutocompleteSuggestion[] = [
    {
      value: "1",
      label: "Daniel Valadas : @valadas",
    },
    {
      value: "2",
      label: "Brian Dukes : @bdukes",
    },
    {
      value: "3",
      label: "David Poindexter : @david-poindexter",
    },
    {
      value: "4",
      label: "Mitchel Sellers : @mitchelsellers",
    }
  ];


  private characters: any[] = [];
  private charactersAbortController?: AbortController;
  private lastFetchedPage = 0;

  private searchCharacters = async (search: string, page: number) => {

    // Abort any ongoing fetch to prevent a race condition.
    if (this.charactersAbortController != undefined) {
      this.charactersAbortController.abort();
    }
    this.charactersAbortController = new AbortController();

    try{
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?name=${encodeURIComponent(search)}&page=${page}`,
      {
        signal: this.charactersAbortController.signal,
      });
      if (response.ok){
        return await response.json();
      }
    }
    catch (error) {
      if ((error as any).name != "AbortError") {
        // Handle the error unless it is a normal AbortError which we ignore.
         
        console.error(error);
      }
    }
  }

  private handleCharacterSearchChanged(search: string) {
    if (search == undefined || search == "") {
      this.characterPicker.suggestions = [];
      this.characterPicker.totalSuggestions = 0;
      return;
    }

    this.searchCharacters(search, 1)
    .then(result => {
      this.characters = result.results;
      var suggestions: DnnAutocompleteSuggestion[] = result.results.map((r: any) => ({
        value: r.id,
        label: r.name,
      }));
      this.characterPicker.suggestions = suggestions;
      this.characterPicker.totalSuggestions = result.info.count;
      this.lastFetchedPage = 1;
    });
  }

  private loadMoreCharacters(searchTerm: string): void {
    this.lastFetchedPage++;
    this.searchCharacters(searchTerm, this.lastFetchedPage)
    .then(result => {
      this.characters = [...this.characters, ...result.results];
      var suggestions: DnnAutocompleteSuggestion[] = this.characters.map(r => ({
        value: r.id,
        label: r.name,
      }));
      this.characterPicker.suggestions = suggestions;
      this.characterPicker.totalSuggestions = result.info.count;
    });
  }

  private resumeDropped(detail: File[]): void {
    var singleFile = detail[0];
    this.resume = singleFile;
  }

  private profilePicCropped(imageData: string): void {
    this.profilePicData = imageData;
  }

  render() {
    return (
      <Host>
        <dnn-fieldset
          class="full-form-width"
          ref={el => this.fieldset = el!}
          label="dnn-fieldset"
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
          <p>
            The wrapper around this text is a dnn-fieldset which wraps most input fields
            with useful and responsive utilites to support a label, help text and validation reporting.
          </p>
          <p>
            The rest of this form includes dnn elements commonly used in forms.
          </p>
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
          onError={e => console.error(e)}
          onInvalid={e => {
            e.preventDefault();
            console.group("Form invalid");
            const form = e.target as HTMLFormElement;
            const invalidControls = form.querySelectorAll<HTMLElement>(":invalid");
            invalidControls.forEach(control => {
              const validityState = (control as HTMLInputElement).validity;
              console.log(control, validityState);
            });
            console.groupEnd();
          }}
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
                label="Gmail"
                type="email"
                helpText="Please enter your Gmail address."
                name="gmail"
                pattern=".+@gmail\.com"
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
              <label>
                <dnn-checkbox name="rememberMe" value="true" />
                  Remember me
              </label>
              <label></label>
              <label>
                <dnn-checkbox
                  useIntermediate
                  name="read"
                />
                  Allow read?
              </label>
              <label>
                <dnn-checkbox
                  useIntermediate
                  name="write"
                  nextStateHandler={currentState => {
                    if (currentState == "checked") {
                      return "unchecked";
                    }
                    if (currentState == "intermediate") {
                      return "checked";
                    }
                    return "intermediate";
                  }}
                />
                Allow write?
              </label>
              <dnn-color-input
                label="Favorite Color"
                name="favoriteColor"
                helpText="If you have any..."
              />
              <dnn-select
                label="Gender"
                name="gender"
                required
              >
                <option value="">--- Select ---</option>
                <option value="male" selected>Male</option>
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
              <dnn-autocomplete
                label="User"
                name="user"
                helpText="Select a user"
                required
                suggestions={this.filteredUsers}
                onSearchQueryChanged={e => {
                  const search = (e.detail || "" as string).toLowerCase();
                  this.filteredUsers = this.users.filter(u => u.label.toLowerCase().includes(search));
                }}
                renderSuggestion={suggestion =>
                  <div style={{display: "flex", gap: "0.5rem"}}>
                    <img
                      style={{width: "3rem", height: "3rem", borderRadius: "50%", padding: "0.25rem"}}
                      src={`https://avatars.githubusercontent.com/${suggestion.label.split("@").pop()}`} alt={suggestion.label}
                    />
                    <div style={{display: "flex", flexDirection:"column", justifyContent: "center"}}>
                      <span>{suggestion.label.split(":")[0]}</span>
                      <span>{suggestion.label.split(":")!.pop()!.trim()}</span>
                    </div>
                  </div>
                }
              />
              <dnn-autocomplete
                ref={el => this.characterPicker = el!}
                label="Favorite Character"
                helpText="Select your favorite Rick and Morty character"
                renderSuggestion={suggestion =>{
                  const character = this.characters.find(r => r.id === suggestion.value);
                  return <div style={{display: "flex"}}>
                    <img
                      style={{width: "5rem", height: "5rem", borderRadius: "50%", padding: "0.25rem"}}
                      src={character.image}
                      alt={character.name}
                    />
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        margin: "0.5em 0"}}>
                      <strong>{character.name}</strong>
                      <div>{character.species} / {character.gender} / {character.status} </div>
                      <div>Location: {character.location.name}</div>
                      <div>Origin: {character.origin.name}</div>
                    </div>
                  </div>
                }}
                onSearchQueryChanged={e => {
                  this.handleCharacterSearchChanged(e.detail as string);
                }}
                onNeedMoreItems={e => this.loadMoreCharacters(e.detail.searchTerm)}
              />
              <dnn-fieldset label="Your Resume">
                {this.resume === undefined &&
                  <dnn-dropzone name="resume" onFilesSelected={e => this.resumeDropped(e.detail)} />
                }
                {this.resume &&
                  <p class="filename">
                    File: {this.resume.name}
                    <dnn-button appearance="danger" onClick={() => this.resume = undefined}>Remove</dnn-button>
                  </p>
                }
              </dnn-fieldset>
              <dnn-fieldset label="Your profile Picture">
                <div class="profile-pic">
                  {this.profilePicConfirmed === false &&
                    <dnn-image-cropper name="profilePic" onImageCropChanged={e => this.profilePicCropped(e.detail)}/>
                  }
                  {this.profilePicConfirmed === false && this.profilePicData != undefined &&
                  <dnn-button onClick={() => this.profilePicConfirmed = true}>Confirm Crop</dnn-button>
                  }
                  {this.profilePicConfirmed &&
                  [
                    <img src={this.profilePicData} alt="Profile Picture" />
                    ,
                    <dnn-button appearance="danger"
                      onClick={
                        () => {
                          this.profilePicData = undefined;
                          this.profilePicConfirmed = false;
                        }
                      }
                    >
                      Remove
                    </dnn-button>
                  ]
                  }
                </div>
              </dnn-fieldset>
              <label class="vertical">
                Some code
                <dnn-monaco-editor name="code" value="<p>Some html</p>" />
              </label>
              <label class="vertical">
                Biography
                <dnn-richtext
                  name="biography"
                  value="<p>Some html</p>"
                  plugins={[{name: "myPlugin", callback: editor => editor.events.on("myPlugin", () => alert("My plugin was clicked!"))}]}
                  customizeOptions={options => {
                    options.buttons = [
                      ...options.buttons,
                      {
                        name: "myPlugin",
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-80 120-280v-400l360-200 360 200v400L480-80ZM364-590q23-24 53-37t63-13q33 0 63 13t53 37l120-67-236-131-236 131 120 67Zm76 396v-131q-54-14-87-57t-33-98q0-11 1-20.5t4-19.5l-125-70v263l240 133Zm40-206q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm40 206 240-133v-263l-125 70q3 10 4 19.5t1 20.5q0 55-33 98t-87 57v131Z"/></svg>`,
                        exec: editor => editor.events.fire("myPlugin"),
                        tooltip: "My Plugin",
                      }];
                    return options;
                  }}
                />
              </label>
              <label>
                I agree to terms
                <dnn-checkbox name="terms" required />
              </label>
            </div>
          </dnn-fieldset>
          <div class="controls">
            <dnn-button reversed type="reset">Reset</dnn-button>
            <dnn-button type="submit">Submit</dnn-button>
          </div>
        </form>
      </Host>
    );
  }
}
