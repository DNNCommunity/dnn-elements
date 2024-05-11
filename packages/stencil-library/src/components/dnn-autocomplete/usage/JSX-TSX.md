#### Most Basic Usage
```tsx
const suggestions =
[
    { value: "1", label: "johnsmith" },
    { value: "2", label: "sarahjones" },
    { value: "3", label: "mikeross" },
    { value: "4", label: "emilyclark" },
    { value: "5", label: "davemiller" },
    { value: "6", label: "lindagreen" },
    { value: "7", label: "chrisevans" },
    { value: "8", label: "lisawhite" },
    { value: "9", label: "tomharris" },
    { value: "10", label: "jennymoore" }
];

let filteredSuggestions = suggestions;

private handleSearchQueryChanged(query){
    if (query == undefined || query == ""){
        this.filteredSuggestions = this.suggestions;
        return;
    }
    this.filteredSuggestions = this.suggestions.filter(user => 
        user.label.toLowerCase().includes(query.toLowerCase));
}

render(){
    return(
        <dnn-autocomplete
            label="UserName"
            suggestions={this.filteredSuggestions}
            onSearchQueryChanged={e => this.handleSearchQueryChanged(e.detail)}
        />
    )
}
```

#### Customizing the display of items
```tsx
private handleRenderSuggestion(suggestion){
    var user = this.getUserDetails(suggestion.value)
    return(
        <div style="display: flex;">
            <img src=`${user.profilePic}.jpg` />
            <span>{user.firstName} {user.lastName}</span>
        </div>
    );
}

private getUserDetails(userId){
    return // Some logic that returns a user object...
}

render(){
    return(
        <dnn-autocomplete
            // Some other props
            renderSuggestion={suggestion => this.handleRenderSuggestion(suggestion)}
        />
    );
}
```

#### Using a paging API
```tsx
let lastFetchedPage = 0;
let totalSuggesitons = 0;
let suggestions = [];

private handleSearchChanged(query){
    fetch(`https://some.endpoint.com/search/${query}`)
    .then(response => response.json())
    .then(data => {
        this.lastFetchedPage = 1;
        this.totalSuggestion = data.totalResults;
        this.suggestions = data.results;
    });
}

private handleLoadMore(query){
    fetch(`https://some.endpoint.com/search/${query}/page=${this.lastFetchedPage + 1}`)
    .then(response => response.json())
    .then(data => {
        this.lastFetchedPage++;
        this.suggestions = [...this.suggestions, data.results];
    });
}

<dnn-autocomplete
    suggestions={this.suggestions}
    totalSuggestions={this.totalSuggestions}
    onSearchQueryChanged={e => {
        this.handleSearchChanged(e.detail);
    }}
    onNeedMoreItems={e => this.loadMore(e.detail.searchTerm)}
/>
```
