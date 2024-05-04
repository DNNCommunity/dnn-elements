/** Represents a single autocomplete suggestion */
export default interface DnnAutocompleteSuggestion {
    /** That value that represents this entry (must be unique) like an ID. */
    value: string;

    /** The label to display to the user. */
    label: string;
};