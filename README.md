# baseweb-extension

# ListIcons
```
import { ListIcons } from "@flek-ai/baseweb-extension";
```

While using the `ListIcons` component, you can pass in the name of the icon you want to use.
While using BaseUI Icons this is done like this:
```
import { ArrowLeft } from "baseui/icon";
<ListItem
    artwork={<ArrowLeft />}
    artworkSize={ARTWORK_SIZES.MEDIUM}
>
```

For example:
```
<ListItem
    artwork={ListIcons("car")}
    artworkSize={ARTWORK_SIZES.MEDIUM}
>
```

Currently supports these icons:
- car

TODO:
- This will most probably be generalised to icons everywhere
- theme might not work with the icons, should work but haven't tested
- Icons should be separted as this would load all the icons together


# General
Needs to be changed to support multiple components





