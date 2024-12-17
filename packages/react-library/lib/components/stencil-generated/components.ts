'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { type ColorInfo, type DnnAutocompleteCustomEvent, type DnnColorInfo, type DnnColorInputCustomEvent, type DnnColorPickerCustomEvent, type DnnDropzoneCustomEvent, type DnnImageCropperCustomEvent, type DnnPermissionsGridCustomEvent, type DnnToggleChangeEventDetail, type DnnToggleCustomEvent, type IPermissions, type NeedMoreItemsEventArgs } from "@dnncommunity/dnn-elements";
import { DnnAutocomplete as DnnAutocompleteElement, defineCustomElement as defineDnnAutocomplete } from "@dnncommunity/dnn-elements/dist/components/dnn-autocomplete.js";
import { DnnButton as DnnButtonElement, defineCustomElement as defineDnnButton } from "@dnncommunity/dnn-elements/dist/components/dnn-button.js";
import { DnnCheckbox as DnnCheckboxElement, defineCustomElement as defineDnnCheckbox } from "@dnncommunity/dnn-elements/dist/components/dnn-checkbox.js";
import { DnnChevron as DnnChevronElement, defineCustomElement as defineDnnChevron } from "@dnncommunity/dnn-elements/dist/components/dnn-chevron.js";
import { DnnCollapsible as DnnCollapsibleElement, defineCustomElement as defineDnnCollapsible } from "@dnncommunity/dnn-elements/dist/components/dnn-collapsible.js";
import { DnnColorInput as DnnColorInputElement, defineCustomElement as defineDnnColorInput } from "@dnncommunity/dnn-elements/dist/components/dnn-color-input.js";
import { DnnColorPicker as DnnColorPickerElement, defineCustomElement as defineDnnColorPicker } from "@dnncommunity/dnn-elements/dist/components/dnn-color-picker.js";
import { DnnDropzone as DnnDropzoneElement, defineCustomElement as defineDnnDropzone } from "@dnncommunity/dnn-elements/dist/components/dnn-dropzone.js";
import { DnnExampleForm as DnnExampleFormElement, defineCustomElement as defineDnnExampleForm } from "@dnncommunity/dnn-elements/dist/components/dnn-example-form.js";
import { DnnFieldset as DnnFieldsetElement, defineCustomElement as defineDnnFieldset } from "@dnncommunity/dnn-elements/dist/components/dnn-fieldset.js";
import { DnnImageCropper as DnnImageCropperElement, defineCustomElement as defineDnnImageCropper } from "@dnncommunity/dnn-elements/dist/components/dnn-image-cropper.js";
import { DnnInput as DnnInputElement, defineCustomElement as defineDnnInput } from "@dnncommunity/dnn-elements/dist/components/dnn-input.js";
import { DnnModal as DnnModalElement, defineCustomElement as defineDnnModal } from "@dnncommunity/dnn-elements/dist/components/dnn-modal.js";
import { DnnMonacoEditor as DnnMonacoEditorElement, defineCustomElement as defineDnnMonacoEditor } from "@dnncommunity/dnn-elements/dist/components/dnn-monaco-editor.js";
import { DnnPermissionsGrid as DnnPermissionsGridElement, defineCustomElement as defineDnnPermissionsGrid } from "@dnncommunity/dnn-elements/dist/components/dnn-permissions-grid.js";
import { DnnProgressBar as DnnProgressBarElement, defineCustomElement as defineDnnProgressBar } from "@dnncommunity/dnn-elements/dist/components/dnn-progress-bar.js";
import { DnnRichtext as DnnRichtextElement, defineCustomElement as defineDnnRichtext } from "@dnncommunity/dnn-elements/dist/components/dnn-richtext.js";
import { DnnSearchbox as DnnSearchboxElement, defineCustomElement as defineDnnSearchbox } from "@dnncommunity/dnn-elements/dist/components/dnn-searchbox.js";
import { DnnSelect as DnnSelectElement, defineCustomElement as defineDnnSelect } from "@dnncommunity/dnn-elements/dist/components/dnn-select.js";
import { DnnSortIcon as DnnSortIconElement, defineCustomElement as defineDnnSortIcon } from "@dnncommunity/dnn-elements/dist/components/dnn-sort-icon.js";
import { DnnTab as DnnTabElement, defineCustomElement as defineDnnTab } from "@dnncommunity/dnn-elements/dist/components/dnn-tab.js";
import { DnnTabs as DnnTabsElement, defineCustomElement as defineDnnTabs } from "@dnncommunity/dnn-elements/dist/components/dnn-tabs.js";
import { DnnTextarea as DnnTextareaElement, defineCustomElement as defineDnnTextarea } from "@dnncommunity/dnn-elements/dist/components/dnn-textarea.js";
import { DnnToggle as DnnToggleElement, defineCustomElement as defineDnnToggle } from "@dnncommunity/dnn-elements/dist/components/dnn-toggle.js";
import { DnnTreeviewItem as DnnTreeviewItemElement, defineCustomElement as defineDnnTreeviewItem } from "@dnncommunity/dnn-elements/dist/components/dnn-treeview-item.js";
import { DnnVerticalOverflowMenu as DnnVerticalOverflowMenuElement, defineCustomElement as defineDnnVerticalOverflowMenu } from "@dnncommunity/dnn-elements/dist/components/dnn-vertical-overflow-menu.js";
import { DnnVerticalSplitview as DnnVerticalSplitviewElement, defineCustomElement as defineDnnVerticalSplitview } from "@dnncommunity/dnn-elements/dist/components/dnn-vertical-splitview.js";
import { TestForm as TestFormElement, defineCustomElement as defineTestForm } from "@dnncommunity/dnn-elements/dist/components/test-form.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type DnnAutocompleteEvents = {
    onValueChange: EventName<CustomEvent<number | string | string[]>>,
    onValueInput: EventName<CustomEvent<number | string | string[]>>,
    onNeedMoreItems: EventName<DnnAutocompleteCustomEvent<NeedMoreItemsEventArgs>>,
    onSearchQueryChanged: EventName<CustomEvent<string>>,
    onItemSelected: EventName<CustomEvent<string>>
};

export const DnnAutocomplete: StencilReactComponent<DnnAutocompleteElement, DnnAutocompleteEvents> = /*@__PURE__*/ createComponent<DnnAutocompleteElement, DnnAutocompleteEvents>({
    tagName: 'dnn-autocomplete',
    elementClass: DnnAutocompleteElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onValueChange: 'valueChange',
        onValueInput: 'valueInput',
        onNeedMoreItems: 'needMoreItems',
        onSearchQueryChanged: 'searchQueryChanged',
        onItemSelected: 'itemSelected'
    } as DnnAutocompleteEvents,
    defineCustomElement: defineDnnAutocomplete
});

type DnnButtonEvents = {
    onConfirmed: EventName<CustomEvent<any>>,
    onCanceled: EventName<CustomEvent<any>>
};

export const DnnButton: StencilReactComponent<DnnButtonElement, DnnButtonEvents> = /*@__PURE__*/ createComponent<DnnButtonElement, DnnButtonEvents>({
    tagName: 'dnn-button',
    elementClass: DnnButtonElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onConfirmed: 'confirmed',
        onCanceled: 'canceled'
    } as DnnButtonEvents,
    defineCustomElement: defineDnnButton
});

type DnnCheckboxEvents = { onCheckedchange: EventName<CustomEvent<"checked" | "unchecked" | "intermediate">> };

export const DnnCheckbox: StencilReactComponent<DnnCheckboxElement, DnnCheckboxEvents> = /*@__PURE__*/ createComponent<DnnCheckboxElement, DnnCheckboxEvents>({
    tagName: 'dnn-checkbox',
    elementClass: DnnCheckboxElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onCheckedchange: 'checkedchange' } as DnnCheckboxEvents,
    defineCustomElement: defineDnnCheckbox
});

type DnnChevronEvents = { onChanged: EventName<CustomEvent<any>> };

export const DnnChevron: StencilReactComponent<DnnChevronElement, DnnChevronEvents> = /*@__PURE__*/ createComponent<DnnChevronElement, DnnChevronEvents>({
    tagName: 'dnn-chevron',
    elementClass: DnnChevronElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onChanged: 'changed' } as DnnChevronEvents,
    defineCustomElement: defineDnnChevron
});

type DnnCollapsibleEvents = { onDnnCollapsibleHeightChanged: EventName<CustomEvent<void>> };

export const DnnCollapsible: StencilReactComponent<DnnCollapsibleElement, DnnCollapsibleEvents> = /*@__PURE__*/ createComponent<DnnCollapsibleElement, DnnCollapsibleEvents>({
    tagName: 'dnn-collapsible',
    elementClass: DnnCollapsibleElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onDnnCollapsibleHeightChanged: 'dnnCollapsibleHeightChanged' } as DnnCollapsibleEvents,
    defineCustomElement: defineDnnCollapsible
});

type DnnColorInputEvents = {
    onColorChange: EventName<DnnColorInputCustomEvent<DnnColorInfo>>,
    onColorInput: EventName<DnnColorInputCustomEvent<DnnColorInfo>>
};

export const DnnColorInput: StencilReactComponent<DnnColorInputElement, DnnColorInputEvents> = /*@__PURE__*/ createComponent<DnnColorInputElement, DnnColorInputEvents>({
    tagName: 'dnn-color-input',
    elementClass: DnnColorInputElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onColorChange: 'colorChange',
        onColorInput: 'colorInput'
    } as DnnColorInputEvents,
    defineCustomElement: defineDnnColorInput
});

type DnnColorPickerEvents = { onColorChanged: EventName<DnnColorPickerCustomEvent<ColorInfo>> };

export const DnnColorPicker: StencilReactComponent<DnnColorPickerElement, DnnColorPickerEvents> = /*@__PURE__*/ createComponent<DnnColorPickerElement, DnnColorPickerEvents>({
    tagName: 'dnn-color-picker',
    elementClass: DnnColorPickerElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onColorChanged: 'colorChanged' } as DnnColorPickerEvents,
    defineCustomElement: defineDnnColorPicker
});

type DnnDropzoneEvents = { onFilesSelected: EventName<DnnDropzoneCustomEvent<File[]>> };

export const DnnDropzone: StencilReactComponent<DnnDropzoneElement, DnnDropzoneEvents> = /*@__PURE__*/ createComponent<DnnDropzoneElement, DnnDropzoneEvents>({
    tagName: 'dnn-dropzone',
    elementClass: DnnDropzoneElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onFilesSelected: 'filesSelected' } as DnnDropzoneEvents,
    defineCustomElement: defineDnnDropzone
});

type DnnExampleFormEvents = NonNullable<unknown>;

export const DnnExampleForm: StencilReactComponent<DnnExampleFormElement, DnnExampleFormEvents> = /*@__PURE__*/ createComponent<DnnExampleFormElement, DnnExampleFormEvents>({
    tagName: 'dnn-example-form',
    elementClass: DnnExampleFormElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as DnnExampleFormEvents,
    defineCustomElement: defineDnnExampleForm
});

type DnnFieldsetEvents = NonNullable<unknown>;

export const DnnFieldset: StencilReactComponent<DnnFieldsetElement, DnnFieldsetEvents> = /*@__PURE__*/ createComponent<DnnFieldsetElement, DnnFieldsetEvents>({
    tagName: 'dnn-fieldset',
    elementClass: DnnFieldsetElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as DnnFieldsetEvents,
    defineCustomElement: defineDnnFieldset
});

type DnnImageCropperEvents = {
    onImageCropChanged: EventName<CustomEvent<string>>,
    onImageFileCropChanged: EventName<DnnImageCropperCustomEvent<File>>
};

export const DnnImageCropper: StencilReactComponent<DnnImageCropperElement, DnnImageCropperEvents> = /*@__PURE__*/ createComponent<DnnImageCropperElement, DnnImageCropperEvents>({
    tagName: 'dnn-image-cropper',
    elementClass: DnnImageCropperElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onImageCropChanged: 'imageCropChanged',
        onImageFileCropChanged: 'imageFileCropChanged'
    } as DnnImageCropperEvents,
    defineCustomElement: defineDnnImageCropper
});

type DnnInputEvents = {
    onValueChange: EventName<CustomEvent<number | string | string[]>>,
    onValueInput: EventName<CustomEvent<number | string | string[]>>
};

export const DnnInput: StencilReactComponent<DnnInputElement, DnnInputEvents> = /*@__PURE__*/ createComponent<DnnInputElement, DnnInputEvents>({
    tagName: 'dnn-input',
    elementClass: DnnInputElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onValueChange: 'valueChange',
        onValueInput: 'valueInput'
    } as DnnInputEvents,
    defineCustomElement: defineDnnInput
});

type DnnModalEvents = { onDismissed: EventName<CustomEvent<any>> };

export const DnnModal: StencilReactComponent<DnnModalElement, DnnModalEvents> = /*@__PURE__*/ createComponent<DnnModalElement, DnnModalEvents>({
    tagName: 'dnn-modal',
    elementClass: DnnModalElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onDismissed: 'dismissed' } as DnnModalEvents,
    defineCustomElement: defineDnnModal
});

type DnnMonacoEditorEvents = { onContentChanged: EventName<CustomEvent<string>> };

export const DnnMonacoEditor: StencilReactComponent<DnnMonacoEditorElement, DnnMonacoEditorEvents> = /*@__PURE__*/ createComponent<DnnMonacoEditorElement, DnnMonacoEditorEvents>({
    tagName: 'dnn-monaco-editor',
    elementClass: DnnMonacoEditorElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onContentChanged: 'contentChanged' } as DnnMonacoEditorEvents,
    defineCustomElement: defineDnnMonacoEditor
});

type DnnPermissionsGridEvents = {
    onUserSearchQueryChanged: EventName<CustomEvent<string>>,
    onPermissionsChanged: EventName<DnnPermissionsGridCustomEvent<IPermissions>>
};

export const DnnPermissionsGrid: StencilReactComponent<DnnPermissionsGridElement, DnnPermissionsGridEvents> = /*@__PURE__*/ createComponent<DnnPermissionsGridElement, DnnPermissionsGridEvents>({
    tagName: 'dnn-permissions-grid',
    elementClass: DnnPermissionsGridElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onUserSearchQueryChanged: 'userSearchQueryChanged',
        onPermissionsChanged: 'permissionsChanged'
    } as DnnPermissionsGridEvents,
    defineCustomElement: defineDnnPermissionsGrid
});

type DnnProgressBarEvents = NonNullable<unknown>;

export const DnnProgressBar: StencilReactComponent<DnnProgressBarElement, DnnProgressBarEvents> = /*@__PURE__*/ createComponent<DnnProgressBarElement, DnnProgressBarEvents>({
    tagName: 'dnn-progress-bar',
    elementClass: DnnProgressBarElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as DnnProgressBarEvents,
    defineCustomElement: defineDnnProgressBar
});

type DnnRichtextEvents = {
    onValueChange: EventName<CustomEvent<string>>,
    onValueInput: EventName<CustomEvent<string>>
};

export const DnnRichtext: StencilReactComponent<DnnRichtextElement, DnnRichtextEvents> = /*@__PURE__*/ createComponent<DnnRichtextElement, DnnRichtextEvents>({
    tagName: 'dnn-richtext',
    elementClass: DnnRichtextElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onValueChange: 'valueChange',
        onValueInput: 'valueInput'
    } as DnnRichtextEvents,
    defineCustomElement: defineDnnRichtext
});

type DnnSearchboxEvents = { onQueryChanged: EventName<CustomEvent<string>> };

export const DnnSearchbox: StencilReactComponent<DnnSearchboxElement, DnnSearchboxEvents> = /*@__PURE__*/ createComponent<DnnSearchboxElement, DnnSearchboxEvents>({
    tagName: 'dnn-searchbox',
    elementClass: DnnSearchboxElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onQueryChanged: 'queryChanged' } as DnnSearchboxEvents,
    defineCustomElement: defineDnnSearchbox
});

type DnnSelectEvents = { onValueChange: EventName<CustomEvent<string>> };

export const DnnSelect: StencilReactComponent<DnnSelectElement, DnnSelectEvents> = /*@__PURE__*/ createComponent<DnnSelectElement, DnnSelectEvents>({
    tagName: 'dnn-select',
    elementClass: DnnSelectElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onValueChange: 'valueChange' } as DnnSelectEvents,
    defineCustomElement: defineDnnSelect
});

type DnnSortIconEvents = { onSortChanged: EventName<CustomEvent<"asc" | "desc" | "none">> };

export const DnnSortIcon: StencilReactComponent<DnnSortIconElement, DnnSortIconEvents> = /*@__PURE__*/ createComponent<DnnSortIconElement, DnnSortIconEvents>({
    tagName: 'dnn-sort-icon',
    elementClass: DnnSortIconElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onSortChanged: 'sortChanged' } as DnnSortIconEvents,
    defineCustomElement: defineDnnSortIcon
});

type DnnTabEvents = NonNullable<unknown>;

export const DnnTab: StencilReactComponent<DnnTabElement, DnnTabEvents> = /*@__PURE__*/ createComponent<DnnTabElement, DnnTabEvents>({
    tagName: 'dnn-tab',
    elementClass: DnnTabElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as DnnTabEvents,
    defineCustomElement: defineDnnTab
});

type DnnTabsEvents = NonNullable<unknown>;

export const DnnTabs: StencilReactComponent<DnnTabsElement, DnnTabsEvents> = /*@__PURE__*/ createComponent<DnnTabsElement, DnnTabsEvents>({
    tagName: 'dnn-tabs',
    elementClass: DnnTabsElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as DnnTabsEvents,
    defineCustomElement: defineDnnTabs
});

type DnnTextareaEvents = {
    onValueInput: EventName<CustomEvent<string>>,
    onValueChange: EventName<CustomEvent<string>>
};

export const DnnTextarea: StencilReactComponent<DnnTextareaElement, DnnTextareaEvents> = /*@__PURE__*/ createComponent<DnnTextareaElement, DnnTextareaEvents>({
    tagName: 'dnn-textarea',
    elementClass: DnnTextareaElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onValueInput: 'valueInput',
        onValueChange: 'valueChange'
    } as DnnTextareaEvents,
    defineCustomElement: defineDnnTextarea
});

type DnnToggleEvents = { onCheckChanged: EventName<DnnToggleCustomEvent<DnnToggleChangeEventDetail>> };

export const DnnToggle: StencilReactComponent<DnnToggleElement, DnnToggleEvents> = /*@__PURE__*/ createComponent<DnnToggleElement, DnnToggleEvents>({
    tagName: 'dnn-toggle',
    elementClass: DnnToggleElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onCheckChanged: 'checkChanged' } as DnnToggleEvents,
    defineCustomElement: defineDnnToggle
});

type DnnTreeviewItemEvents = {
    onUserExpanded: EventName<CustomEvent<void>>,
    onUserCollapsed: EventName<CustomEvent<void>>
};

export const DnnTreeviewItem: StencilReactComponent<DnnTreeviewItemElement, DnnTreeviewItemEvents> = /*@__PURE__*/ createComponent<DnnTreeviewItemElement, DnnTreeviewItemEvents>({
    tagName: 'dnn-treeview-item',
    elementClass: DnnTreeviewItemElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {
        onUserExpanded: 'userExpanded',
        onUserCollapsed: 'userCollapsed'
    } as DnnTreeviewItemEvents,
    defineCustomElement: defineDnnTreeviewItem
});

type DnnVerticalOverflowMenuEvents = NonNullable<unknown>;

export const DnnVerticalOverflowMenu: StencilReactComponent<DnnVerticalOverflowMenuElement, DnnVerticalOverflowMenuEvents> = /*@__PURE__*/ createComponent<DnnVerticalOverflowMenuElement, DnnVerticalOverflowMenuEvents>({
    tagName: 'dnn-vertical-overflow-menu',
    elementClass: DnnVerticalOverflowMenuElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as DnnVerticalOverflowMenuEvents,
    defineCustomElement: defineDnnVerticalOverflowMenu
});

type DnnVerticalSplitviewEvents = { onWidthChanged: EventName<CustomEvent<number>> };

export const DnnVerticalSplitview: StencilReactComponent<DnnVerticalSplitviewElement, DnnVerticalSplitviewEvents> = /*@__PURE__*/ createComponent<DnnVerticalSplitviewElement, DnnVerticalSplitviewEvents>({
    tagName: 'dnn-vertical-splitview',
    elementClass: DnnVerticalSplitviewElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onWidthChanged: 'widthChanged' } as DnnVerticalSplitviewEvents,
    defineCustomElement: defineDnnVerticalSplitview
});

type TestFormEvents = NonNullable<unknown>;

export const TestForm: StencilReactComponent<TestFormElement, TestFormEvents> = /*@__PURE__*/ createComponent<TestFormElement, TestFormEvents>({
    tagName: 'test-form',
    elementClass: TestFormElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: {} as TestFormEvents,
    defineCustomElement: defineTestForm
});