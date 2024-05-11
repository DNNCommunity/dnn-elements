/** Represents a single autocomplete suggestion */
export interface DnnAutocompleteSuggestion {
    /** That value that represents this entry (must be unique) like an ID. */
    value: string;

    /** The label to display to the user. */
    label: string;
};

export interface NeedMoreItemsEventArgs {
    /** The current search term. */
    searchTerm: string;
}