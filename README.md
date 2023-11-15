# titlemaker.js
titlemaker.js is **easy Text-to-SVG tool** for any Comic Thumbnails.

## Installation
### via [npm](https://npmjs.org) package manager
```shell
npm install titlemaker.js
```
```javascript
const titlemaker = require('titlemaker.js');
// or
import { make } from 'titlemaker.js'
```

## Usage
```javascript
const options = { title: "Lorem Ipsum",
                  font: "GangwonEduPower" }
make(options, (err, svg) => {
    // Do whatever you want with svg(string)
});
```

> ### Options
> - **title**: string
> - **font**: string
> - **alignLeft**: boolean
> - **color**: string

> ### Available Fonts
> - **카페24클래식타입**: `Cafe24Classic`
> - **카페24단정해**: `Cafe24Danjunghae`
> - **조선일보명조**: `ChosunNm`
> - **강원교육튼튼체**: `GangwonEduPower`
> - **가나초콜릿체**: `Ghanachocolate`
> - **빛의계승자**: `HeirofLight`
> - **여기어때 잘난체**: `Jalnan`
> - **어그로체**: `Sandbox`