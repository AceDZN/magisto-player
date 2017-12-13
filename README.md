# Magisto Player for React - (WorkInProgress)
##### just a simple way to Embed Magisto Player in your react based app

###### * Please note that Magisto embedded option is disabled for FREE Magisto accounts
#
#
## Getting Started with Magisto Player React Library
1. `npm install react-magisto-player --save`
2. `import { MagistoPlayer } from 'react-magisto-player';`
3. `<MagistoPlayer video_hash="K1UZNF1WRGEpUxxhCzE" />`
#
```jsx
import { MagistoPlayer } from 'react-magisto-player';
class MyComponent extends React.Component {
    render() {
        return (
            <MagistoPlayer
                video_hash={video_hash} // "************"
                autoplay={autoplay} // "0", "1"
                loop={loop} // "0", "1"
                splash={splash} // "0", "1"
                aspect_ratio={aspect_ratio} // "16:9", "4:3", "3:4", "1:1"

                controlsColor={controlsColor} // "#ffffff"
                hoverColor={hoverColor} // "#51eab2"
                progressColor={progressColor} // "#51eab2"
                bigSplashButton={bigSplashButton} // "#0a0a3c"
                />
        );
    }
}
```
#
## Properties editor
There is a little demo of the component with a nice form to config your MagistoPlayer appearance.
you can use it by launching the example app inside this npm package.
you can access the Live Preview here:
[https://www.acedzn.com/ex/react-magisto-player/](https://www.acedzn.com/ex/react-magisto-player/)
#
The example app is included in this pack:
1. `cd node_modules/react-magisto-player/example_app`
2. `npm install`
3. `gulp serve`
4. navigate to `http://localhost:9000` to see the editor
