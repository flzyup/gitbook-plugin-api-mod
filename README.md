# Gitbook Plugin - API
Write beautiful API documentation with GitBook

This plugins requires gitbook `>=2.0.0`.

## Notice
**This is modified version from origin [Gitbook Plugin API](https://github.com/MagLoft/gitbook-plugin-api)**

Thanks for **Tobias Strebitzer** bringing this awesome plugin

**<font color="blue">You can submit request features you want on issue page!</font>**

## Changelog
### v1.0.4
- Update and fix README.md

### v1.0.3
- Add support line break when using `url` param
- Also you can specify how many spaces will automatically add when using line break in `url`, please refer configuration

### v1.0.2
- Move url/method definition on the left of h2(api name)
- Some little bit style update
- You can config the api item to expand or not now

### v1.0.1
- Update README.md

### v1.0.0
- Ported from origin version v1.1.0
- Update url style to matching default gitbook theme style
- Remove margin transition
- Reduce the box-shadow when it not expanded
- Update div h3 text color

## Installation

Add the plugin to your `book.json`, edit `book.json`, add plugin
```
{
  "plugins": ["api-mod"]
}
```

then run `gitbook install`:


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

## Configuration
You can edit `book.json` for this plugin configuration:

### Expand api items or not by default

The default value is false, you can enable it as the following:

```
{
  "plugins": ["api-mod"],
  "pluginsConfig": {
    "api-mod": {
      "expanded": true
    }
  }
}
```
This will expand all api items by default

### Specify how many spaces will automatically add when using line break in `url`
```
{
  "plugins": ["api-mod"],
  "pluginsConfig": {
    "api-mod": {
      "url-break-line-indent-spaces": 4
    }
  }
}
```
You can add as you want!

Before:

    {% api "Test method", url="test(param1, param2, param3, param4, param5, param6)" %}
    Test long params method


    {% endapi %}

![image](https://i4o.xyz/wp-content/uploads/2018/11/1.png)

After:

Add `<br>` or `<br/>` in `url` as you like, config the `url-break-line-indent-spaces`

    {% api "Test method", url="test(param1, param2, param3, <br>param4, param5, param6)" %}
    Test long params method


    {% endapi %}

![image](https://i4o.xyz/wp-content/uploads/2018/11/2.png)
