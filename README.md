# baseweb-extension

## installation
- next tag for latest release
```
npm i @flek-ai/baseweb-extension@next
```

## icon
- icons work with baseweb and follow the theming of baseweb
### import them like this:
- $icon-name - list of supported icons given below
- $library - `heroicons`,`custom`
- $type - `outline`, `solid`

### Supported icons
- List of supported icons is here - `https://github.com/flek-ai/baseweb-extension/tree/main/lib/icon/icons.json`
- Heroicon folder: `https://github.com/flek-ai/baseweb-extension/tree/main/lib/icon/heroicons`
- Custom folder: `https://github.com/flek-ai/baseweb-extension/tree/main/lib/icon/custom`
```
import { $icon-name } from "@flek-ai/baseweb-extension/icon/$library/$type/$icon-name";  
```
Examples:
- heroicons
```
import { MapPin } from "@flek-ai/baseweb-extension/icon/heroicons/outline/MapPin";
import { ShoppingCart } from "@flek-ai/baseweb-extension/icon/heroicons/outline/ShoppingCart";
```
- custom
```
import { Car } from "@flek-ai/baseweb-extension/icon/custom/solid/Car";
```


