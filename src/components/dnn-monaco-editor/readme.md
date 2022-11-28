# dnn-monaco-editor



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                         | Type                                   | Default     |
| --------- | --------- | --------------------------------------------------- | -------------------------------------- | ----------- |
| `options` | --        | Sets the monaco editor options, see monaco options. | `IStandaloneEditorConstructionOptions` | `undefined` |


## Events

| Event           | Description                         | Type                |
| --------------- | ----------------------------------- | ------------------- |
| `editorDidLoad` | Event to indicate editor has loaded | `CustomEvent<void>` |


## Methods

### `getValue() => Promise<string>`

Get value of the current model attached to this editor.

#### Returns

Type: `Promise<string>`



### `setFocus() => Promise<void>`

Set focus to editor

#### Returns

Type: `Promise<void>`



### `updateLanguage(languageId: string) => Promise<void>`

Update code language editor

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                     | Description                           |
| ------------------------ | ------------------------------------- |
| `--monaco-editor-height` | height of the editor, default is 50vh |
| `--monaco-editor-width`  | width of the editor, default is 100%  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
