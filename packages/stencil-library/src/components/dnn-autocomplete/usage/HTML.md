#### Most Basic Usage
```html
<script type="text/javascript">
document.addEventListener("DOMContentLoaded", () => {
    var dnnAutoComplete = document.querySelector("#dnnAutoComplete");

    var suggestions =
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

    dnnAutoComplete.addEventListener("searchQueryChanged", query => {
        if (query == undefined || query == ""){
            dnnAutoComplete.suggestions = this.suggestions;
            return;
        }
        dnnAutoComplete.suggestions = this.suggestions.filter(user => 
            user.label.toLowerCase().includes(query.toLowerCase));
    })
});
</script>

<dnn-autocomplete
    label="UserName"
    id="dnnAutoComplete"
    suggestions={this.filteredSuggestions}
    onSearchQueryChanged={e => this.handleSearchQueryChanged(e.detail)}
/>
```

#### Customizing the display of items
```html
<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", () => {
        var dnnAutoComplete = document.querySelector("#dnnAutoComplete");

        dnnAutoComplete.renderSuggesion = function(suggestion){
            var user = // Some logic that gets a user info...

            var div = document.createElement("div");
            div.style="display: flex";
            var img = document.createElement("img");
            img.src = user.profilePic;
            div.appendChild(img);
            var span = document.createElement("span");
            span.innerText = user.firstName + " " + user.lastName;
            div.appendChild(span);
            return div;
        };
    });
</script>

<dnn-autocomplete
    id="dnnAutoComplete"
/>
```

#### Using a paging API
```html
<script type="text/javascript">
document.addEventListener("DOMContentLoaded", () => {
    var dnnAutoComplete = document.querySelector("#dnnAutoComplete");

    var lastFetchedPage = 0;
    var suggestions = [];

    dnnAutoComplete.addEventListener("searchChanged", e => 
    {
        var query = e.detail;
        fetch(`https://some.endpoint.com/search/${query}`)
        .then(response => response.json())
        .then(data => {
            lastFetchedPage = 1;
            dnnAutoComplete.totalSuggestions = data.totalResults;
            suggestions = data.results;
            dnnAutoComplete.suggestions = suggestions;
        });
    });

    dnnAutoComplete.addEventListener("NeedMoreItems", () =>
    {
        fetch(`https://some.endpoint.com/search/${query}/page=${lastFetchedPage + 1}`)
        .then(response => response.json())
        .then(data => {
            lastFetchedPage++;
            suggestions.push(data.results);
            dnnAutoComplete.suggestions = suggestions;
        });
    });
});
</script>

<dnn-autocomplete
    id="dnnAutoComplete"
/>
```
