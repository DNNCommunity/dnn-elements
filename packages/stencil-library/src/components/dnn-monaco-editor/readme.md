# dnn-monaco-editor



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                           | Type                                                                                                                                                                                                                                                                                                                                                                                                                                    | Default     |
| ---------- | ---------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `language` | `language` | Defines the language for the editor.  | `"json" \| "html" \| "ruby" \| "r" \| "c" \| "plaintext" \| "bat" \| "coffeescript" \| "cpp" \| "csharp" \| "dockerfile" \| "fsharp" \| "go" \| "handlebars" \| "ini" \| "pug" \| "java" \| "lua" \| "markdown" \| "msdax" \| "objective-c" \| "postiats" \| "php" \| "powershell" \| "python" \| "razor" \| "swift" \| "sql" \| "vb" \| "xml" \| "less" \| "scss" \| "css" \| "yaml" \| "sol" \| "sb" \| "typescript" \| "javascript"` | `"html"`    |
| `value`    | `value`    | Sets the code contained in the editor | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                | `undefined` |


## Events

| Event            | Description                                            | Type                  |
| ---------------- | ------------------------------------------------------ | --------------------- |
| `contentChanged` | Emits the new value of the content when it is changed. | `CustomEvent<string>` |


## CSS Custom Properties

| Name                     | Description                           |
| ------------------------ | ------------------------------------- |
| `--monaco-editor-height` | height of the editor, default is 50vh |
| `--monaco-editor-width`  | width of the editor, default is 100%  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
