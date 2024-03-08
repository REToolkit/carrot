# carrot

Custom code for Carrot sites

## Usage

Add the appropriate code snippet in `Carrot Site > Settings > Analytics & Scripts > Footer Scripts – run after the site is loaded`

### Attribution for REToolkit

This should be added to all sites.

#### Options

Options are passed in as a JSON object.

- `"type": "link|logo"`
- `"utm_source": "client"`
- `"utm_medium": "footer"`
- `"utm_campaign": "brand"`
- `"utm_content": "referring_base_url"`
- `"utm_term": "keyword_used_in_link"` - generally only used with PAID ads

### Examples

```html
<!-- To insert the div with image and link -->
<script src="https://cdn.jsdelivr.net/gh/retoolkit/carrot/dist/attr.min.js"  id="io.retoolkit.attr" data-option='{"type": "logo"}' defer></script>
```

```html
<!-- To insert just the text link -->
<script src="https://cdn.jsdelivr.net/gh/retoolkit/carrot/dist/attr.min.js"  defer></script>
```
