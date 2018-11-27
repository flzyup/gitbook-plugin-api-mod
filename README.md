# Gitbook Plugin - API
Write beautiful API documentation with GitBook

This plugins requires gitbook `>=2.0.0`.

## Notice
**This is modified version from origin [Gitbook Plugin API](https://github.com/MagLoft/gitbook-plugin-api)**

Thanks for **Tobias Strebitzer** bringing this awesome plugin

## Changelog
### v1.0.1
- Update README.md

### v1.0.0
- Ported from origin version v1.1.0
- Update url style to matching default gitbook theme style
- Remove margin transition
- Reduce the box-shadow when it not expanded
- Update div h3 text color

## Installation

Add the plugin to your `book.json`, then run `gitbook install`:

```
{
    plugins: ["api-mod"]
}
```

You can now start writing API documentation:

    {% api "List App Pages", method="GET", url="https://www.magloft.com/api/portal/v1/app_pages/:app_id/page/:page" %}

    This endpoint **returns** a list of all `app pages` that belong to the magazine

    ### Parameters:

    | Name       | Type    | Desc                                                |
    | :--------- | :------ | :-------------------------------------------------- |
    | **app_id** | String  | App ID to list app pages for                        |
    | **page**   | Integer | The page to list                                    |
    | per_page   | Integer | Number of items to show per page                    |
    | order_by   | Symbol  | Field to sort results by                            |
    | order_dir  | Symbol  | Direction (asc, desc) to sort results by            |
    | filter     | String  | Text filter to search pages by name, title and html |

    ### Response:

    ```json
    {
      "id": 1234,
      "title": "Welcome to MagLoft"
    }
    ```

    {% endapi %}
