# Magisto Player for React
just a simple way to Embed Magisto Player in your app

## Getting Started with Magisto Player React Library
1. `npm install react-magisto-player --save`
2. `import { MagistoPlayer } from 'react-magisto-player';`
3. `<MagistoPlayer video_hash="K1UZNF1WRGEpUxxhCzE" />`


```jsx
import { MagistoPlayer } from 'react-magisto-player';
class MyComponent extends React.Component {
    render() {
        return (
            <MagistoPlayer
                video_hash={this.state.video_hash}
                autoplay={this.state.autoplay}
                loop={this.state.loop}
                splash={this.state.splash}
                aspect_ratio={this.state.aspect_ratio}

                controlsColor={this.state.controlsColor}
                hoverColor={this.state.hoverColor}
                progressColor={this.state.progressColor}
                />
        );
    }
}
```



## Properties editor
There is a little demo of the component with a nice form to config your MagistoPlayer appearance.
you can use it by launching the example app inside this npm package.
you can access the Live Preview here:
[https://www.acedzn.com/ex/react-magisto-player/](https://www.acedzn.com/ex/react-magisto-player/)



The example app is included in this pack:
1. `cd node_modules/react-magisto-player/example_app`
2. `npm install`
3. `gulp serve`
4. navigate to `http://localhost:9000` to see the editor
