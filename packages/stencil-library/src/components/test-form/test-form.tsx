import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'test-form',
  styleUrl: 'test-form.scss',
  shadow: true,
})
export class TestForm {
  @State() data: {
    country?: string;
  };

  @State() countries: {
    name: string;
    states: {name: string}[];
  }[] = [
    {
      name: 'United States',
      states: [
        {
          name: 'Alabama',
        },
        {
          name: 'Alaska',
        },
      ],
    },
    {
      name: 'Canada',
      states: [
        {
          name: 'Alberta',
        },
        {
          name: 'British Columbia',
        },
      ],
    },
  ];

  private submitStep(e: Event): void {
    e.preventDefault();
    console.log(this.data);
  }

  render() {
    {console.log(this.countries)}
    {
      this.countries.map(country => console.log(country));
    }
    return (
      <Host>
        <form onSubmit={e => this.submitStep(e)}>
          <dnn-select
            label="Country"
            helpText='Select your country'
            required
          >
            <option
              value=""
              selected={this.data == undefined || this.data.country == undefined || this.data?.country == ''}
            >
              -- Select a country --
            </option>
            {this.countries && this.countries.map(country => (
              <option value={country.name} selected={this.data?.country == country.name}>
                {country.name}
              </option>
            ))}
          </dnn-select>
          <dnn-button formButtonType="submit">Submit</dnn-button>
        </form>
      </Host>
    );
  }
}
