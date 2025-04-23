import{k as i}from"./lit-element-BIeOw4Bz.js";import{a as l}from"./index-BMoMLr6o.js";import"./v4-CtRu48qb.js";const u=`# dnn-autocomplete

Building a component that is flexible enough for multiple use cases is not easy. This component externalizes some of its behavior to make it more reusable. To use it effectivelly please read the usage examples carefuly.

## Most Basic Usage
You need to at least provide the list of items and refresh the results with your own logic for the searched terms. Suggestions are not just strings, they are an object with a \`value\` and a \`label\`. If you are in a typed environment, \`DnnAutocompleteSuggestion\` is the type to use for individual suggestions. The label is what shows to the user and the value is what gets posted in both events and form values. The \`onSearchQueryChanged\` event lets you know to refresh your list of suggestions.

Data can be a harcoded list or an API call or whatever makes sense for your use case.

## Customizing the display of items
We have made it so the consumer can totally customize how suggestions are displayed, this is a very powerful feature that makes this component very reusable. If not customized, the out-of-box experience is to just display the label in plain text in the dropdown. But you can hook into the \`renderSuggestion\` callback to override that default behavior. You receive the suggestion item and return the html to display.

<!-- Auto Generated Below -->


## Usage

### HTML

#### Most Basic Usage\r
\`\`\`html\r
<script type="text/javascript">\r
document.addEventListener("DOMContentLoaded", () => {\r
    var dnnAutoComplete = document.querySelector("#dnnAutoComplete");\r
\r
    var suggestions =\r
    [\r
        { value: "1", label: "johnsmith" },\r
        { value: "2", label: "sarahjones" },\r
        { value: "3", label: "mikeross" },\r
        { value: "4", label: "emilyclark" },\r
        { value: "5", label: "davemiller" },\r
        { value: "6", label: "lindagreen" },\r
        { value: "7", label: "chrisevans" },\r
        { value: "8", label: "lisawhite" },\r
        { value: "9", label: "tomharris" },\r
        { value: "10", label: "jennymoore" }\r
    ];\r
\r
    dnnAutoComplete.addEventListener("searchQueryChanged", query => {\r
        if (query == undefined || query == ""){\r
            dnnAutoComplete.suggestions = this.suggestions;\r
            return;\r
        }\r
        dnnAutoComplete.suggestions = this.suggestions.filter(user => \r
            user.label.toLowerCase().includes(query.toLowerCase));\r
    })\r
});\r
<\/script>\r
\r
<dnn-autocomplete\r
    label="UserName"\r
    id="dnnAutoComplete"\r
    suggestions={this.filteredSuggestions}\r
    onSearchQueryChanged={e => this.handleSearchQueryChanged(e.detail)}\r
/>\r
\`\`\`\r
\r
#### Customizing the display of items\r
\`\`\`html\r
<script type="text/javascript">\r
    document.addEventListener("DOMContentLoaded", () => {\r
        var dnnAutoComplete = document.querySelector("#dnnAutoComplete");\r
\r
        dnnAutoComplete.renderSuggesion = function(suggestion){\r
            var user = // Some logic that gets a user info...\r
\r
            var div = document.createElement("div");\r
            div.style="display: flex";\r
            var img = document.createElement("img");\r
            img.src = user.profilePic;\r
            div.appendChild(img);\r
            var span = document.createElement("span");\r
            span.innerText = user.firstName + " " + user.lastName;\r
            div.appendChild(span);\r
            return div;\r
        };\r
    });\r
<\/script>\r
\r
<dnn-autocomplete\r
    id="dnnAutoComplete"\r
/>\r
\`\`\`\r
\r
#### Using a paging API\r
\`\`\`html\r
<script type="text/javascript">\r
document.addEventListener("DOMContentLoaded", () => {\r
    var dnnAutoComplete = document.querySelector("#dnnAutoComplete");\r
\r
    var lastFetchedPage = 0;\r
    var suggestions = [];\r
\r
    dnnAutoComplete.addEventListener("searchChanged", e => \r
    {\r
        var query = e.detail;\r
        fetch(\`https://some.endpoint.com/search/\${query}\`)\r
        .then(response => response.json())\r
        .then(data => {\r
            lastFetchedPage = 1;\r
            dnnAutoComplete.totalSuggestions = data.totalResults;\r
            suggestions = data.results;\r
            dnnAutoComplete.suggestions = suggestions;\r
        });\r
    });\r
\r
    dnnAutoComplete.addEventListener("NeedMoreItems", () =>\r
    {\r
        fetch(\`https://some.endpoint.com/search/\${query}/page=\${lastFetchedPage + 1}\`)\r
        .then(response => response.json())\r
        .then(data => {\r
            lastFetchedPage++;\r
            suggestions.push(data.results);\r
            dnnAutoComplete.suggestions = suggestions;\r
        });\r
    });\r
});\r
<\/script>\r
\r
<dnn-autocomplete\r
    id="dnnAutoComplete"\r
/>\r
\`\`\`


### JSX-TSX

#### Most Basic Usage\r
\`\`\`tsx\r
const suggestions =\r
[\r
    { value: "1", label: "johnsmith" },\r
    { value: "2", label: "sarahjones" },\r
    { value: "3", label: "mikeross" },\r
    { value: "4", label: "emilyclark" },\r
    { value: "5", label: "davemiller" },\r
    { value: "6", label: "lindagreen" },\r
    { value: "7", label: "chrisevans" },\r
    { value: "8", label: "lisawhite" },\r
    { value: "9", label: "tomharris" },\r
    { value: "10", label: "jennymoore" }\r
];\r
\r
let filteredSuggestions = suggestions;\r
\r
private handleSearchQueryChanged(query){\r
    if (query == undefined || query == ""){\r
        this.filteredSuggestions = this.suggestions;\r
        return;\r
    }\r
    this.filteredSuggestions = this.suggestions.filter(user => \r
        user.label.toLowerCase().includes(query.toLowerCase));\r
}\r
\r
render(){\r
    return(\r
        <dnn-autocomplete\r
            label="UserName"\r
            suggestions={this.filteredSuggestions}\r
            onSearchQueryChanged={e => this.handleSearchQueryChanged(e.detail)}\r
        />\r
    )\r
}\r
\`\`\`\r
\r
#### Customizing the display of items\r
\`\`\`tsx\r
private handleRenderSuggestion(suggestion){\r
    var user = this.getUserDetails(suggestion.value)\r
    return(\r
        <div style="display: flex;">\r
            <img src=\`\${user.profilePic}.jpg\` />\r
            <span>{user.firstName} {user.lastName}</span>\r
        </div>\r
    );\r
}\r
\r
private getUserDetails(userId){\r
    return // Some logic that returns a user object...\r
}\r
\r
render(){\r
    return(\r
        <dnn-autocomplete\r
            // Some other props\r
            renderSuggestion={suggestion => this.handleRenderSuggestion(suggestion)}\r
        />\r
    );\r
}\r
\`\`\`\r
\r
#### Using a paging API\r
\`\`\`tsx\r
let lastFetchedPage = 0;\r
let totalSuggesitons = 0;\r
let suggestions = [];\r
\r
private handleSearchChanged(query){\r
    fetch(\`https://some.endpoint.com/search/\${query}\`)\r
    .then(response => response.json())\r
    .then(data => {\r
        this.lastFetchedPage = 1;\r
        this.totalSuggestion = data.totalResults;\r
        this.suggestions = data.results;\r
    });\r
}\r
\r
private handleLoadMore(query){\r
    fetch(\`https://some.endpoint.com/search/\${query}/page=\${this.lastFetchedPage + 1}\`)\r
    .then(response => response.json())\r
    .then(data => {\r
        this.lastFetchedPage++;\r
        this.suggestions = [...this.suggestions, data.results];\r
    });\r
}\r
\r
<dnn-autocomplete\r
    suggestions={this.suggestions}\r
    totalSuggestions={this.totalSuggestions}\r
    onSearchQueryChanged={e => {\r
        this.handleSearchChanged(e.detail);\r
    }}\r
    onNeedMoreItems={e => this.loadMore(e.detail.searchTerm)}\r
/>\r
\`\`\`



## Properties

| Property                 | Attribute                  | Description                                                                                                                                                                                           | Type                                                                    | Default     |
| ------------------------ | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------- |
| \`autocomplete\`           | \`autocomplete\`             | Defines the type of automatic completion the browser could use. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete                                                         | \`string\`                                                                | \`"off"\`     |
| \`disabled\`               | \`disabled\`                 | Defines whether the field is disabled.                                                                                                                                                                | \`boolean \\| undefined\`                                                  | \`undefined\` |
| \`helpText\`               | \`help-text\`                | Defines the help label displayed under the field.                                                                                                                                                     | \`string \\| undefined\`                                                   | \`undefined\` |
| \`label\`                  | \`label\`                    | The label for this autocomplete.                                                                                                                                                                      | \`string \\| undefined\`                                                   | \`undefined\` |
| \`name\`                   | \`name\`                     | The name for this autocomplete when used in forms.                                                                                                                                                    | \`string \\| undefined\`                                                   | \`undefined\` |
| \`preloadThresholdPixels\` | \`preload-threshold-pixels\` | How many suggestions to preload in pixels of their height. This is used to calculate the virtual scroll height and request more items before they get into view.                                      | \`number\`                                                                | \`1000\`      |
| \`renderSuggestion\`       | \`render-suggestion\`        | Callback to render suggestions, if not provided, only the label will be rendered.                                                                                                                     | \`((suggestion: DnnAutocompleteSuggestion) => HTMLElement) \\| undefined\` | \`undefined\` |
| \`required\`               | \`required\`                 | Defines whether the field requires having a value.                                                                                                                                                    | \`boolean \\| undefined\`                                                  | \`undefined\` |
| \`suggestions\`            | \`suggestions\`              | Sets the list of suggestions.                                                                                                                                                                         | \`DnnAutocompleteSuggestion[]\`                                           | \`[]\`        |
| \`totalSuggestions\`       | \`total-suggestions\`        | The total amount of suggestions for the given search query. This can be used to show virtual scroll and pagination progressive feeding. The needMoreItems event should be used to request more items. | \`number \\| undefined\`                                                   | \`undefined\` |
| \`value\`                  | \`value\`                    | Defines the value for this autocomplete                                                                                                                                                               | \`string\`                                                                | \`""\`        |


## Events

| Event                | Description                                                                                                                                                                            | Type                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| \`itemSelected\`       | Fires when an item is selected.                                                                                                                                                        | \`CustomEvent<string>\`                       |
| \`needMoreItems\`      | Fires when the component needs to display more items in the suggestions.                                                                                                               | \`CustomEvent<NeedMoreItemsEventArgs>\`       |
| \`searchQueryChanged\` | Fires when the search query has changed. This is almost like valueInput, but it is debounced and can be used to trigger a search query without overloading API endpoints while typing. | \`CustomEvent<string>\`                       |
| \`valueChange\`        | Fires when the value has changed and the user exits the input.                                                                                                                         | \`CustomEvent<number \\| string \\| string[]>\` |
| \`valueInput\`         | Fires when the using is inputing data (on keystrokes).                                                                                                                                 | \`CustomEvent<number \\| string \\| string[]>\` |


## Methods

### \`checkValidity() => Promise<ValidityState>\`

Reports the input validity details. See https://developer.mozilla.org/en-US/docs/Web/API/ValidityState

#### Returns

Type: \`Promise<ValidityState>\`



### \`setCustomValidity(message: string) => Promise<void>\`

Can be used to set a custom validity message.

#### Parameters

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| \`message\` | \`string\` |             |

#### Returns

Type: \`Promise<void>\`




## CSS Custom Properties

| Name                 | Description                                      |
| -------------------- | ------------------------------------------------ |
| \`--background-color\` | Defines the background color.                    |
| \`--control-radius\`   | Defines the radius for the control corners.      |
| \`--danger-color\`     | Defines the danger color used for invalid data.  |
| \`--focus-color\`      | Defines the color when the component is focused. |
| \`--foreground-color\` | Defines the foreground color.                    |


## Dependencies

### Used by

 - [dnn-example-form](../examples/dnn-example-form)

### Depends on

- [dnn-fieldset](../dnn-fieldset)

### Graph
\`\`\`mermaid
graph TD;
  dnn-autocomplete --> dnn-fieldset
  dnn-example-form --> dnn-autocomplete
  style dnn-autocomplete fill:#f9f,stroke:#333,stroke-width:4px
\`\`\`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
`,c={title:"Elements/AutoComplete",component:"dnn-autocomplete",tags:["autodocs"],parameters:{docs:{description:{component:u}}},argTypes:{disabled:{control:"boolean"},helpText:{control:"text"},label:{control:"text"},name:{control:"text"},preloadThresholdPixels:{control:"number"},renderSuggestions:{control:"object"},required:{control:"boolean"},suggestions:{control:"object"},totalSuggestions:{control:"number"},value:{control:"text"},onSearchQueryChanged:{action:"onSearchQueryChanged"}}},t=l("itemSelected","needMoreItems","searchQueryChanged","valueChange","valueInput"),d=e=>i`
    <dnn-autocomplete
        .disabled=${e.disabled}
        .helpText=${e.helpText}
        .label=${e.label}
        .name=${e.name}
        .preloadThresholdPixels=${e.preloadThresholdPixels}
        .renderSuggestions=${e.renderSuggestions}
        .required=${e.required}
        .suggestions=${e.suggestions}
        .totalSuggestions=${e.totalSuggestions}
        .value=${e.value}
        @itemSelected=${n=>t.itemSelected(n)}
        @needMoreItems=${n=>t.needMoreItems(n)}
        @searchQueryChanged=${e.onSearchQueryChanged?e.onSearchQueryChanged:n=>t.searchQueryChanged(n)}
        @valueChange=${n=>t.valueChange(n)}
        @valueInput=${n=>t.valueInput(n)}
    >
    </dnn-autocomplete>
    `,r=d.bind({});r.args={label:"Autocomplete"};var s,o,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => html\`
    <dnn-autocomplete
        .disabled=\${args.disabled}
        .helpText=\${args.helpText}
        .label=\${args.label}
        .name=\${args.name}
        .preloadThresholdPixels=\${args.preloadThresholdPixels}
        .renderSuggestions=\${args.renderSuggestions}
        .required=\${args.required}
        .suggestions=\${args.suggestions}
        .totalSuggestions=\${args.totalSuggestions}
        .value=\${args.value}
        @itemSelected=\${e => eventsFromNames.itemSelected(e)}
        @needMoreItems=\${e => eventsFromNames.needMoreItems(e)}
        @searchQueryChanged=\${args.onSearchQueryChanged ? args.onSearchQueryChanged : e => eventsFromNames.searchQueryChanged(e)}
        @valueChange=\${e => eventsFromNames.valueChange(e)}
        @valueInput=\${e => eventsFromNames.valueInput(e)}
    >
    </dnn-autocomplete>
    \``,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const p=["Primary"];export{r as Primary,p as __namedExportsOrder,c as default};
