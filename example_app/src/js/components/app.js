import React, { Component } from 'react';
import { ForkBanner } from './fork-banner';
import { MagistoPlayer } from 'components';
import { MagistoPlayerEditor } from './magistoPlayerEditor';

export function getSizeRightType(size,min=50,max=1000){
    debugger
    size = size.replace(' ','');
    if(size == 'auto' || size == '')
        return 'auto';

    let temp_prop = 'px';   // default size selector

    if(size.indexOf('%') !== -1){ // Check for % selector
        temp_prop = '%'; //size = size.replace('%','');
        min = 0; max = 100;
    }


    if(size.indexOf('px') !== -1) // Check for px selector
        temp_prop = 'px'; //size = size.replace('px','');

    size = size.replace(/[^0-9]+/g, ""); // size contain only numbers

    if(parseInt(size) >= min && parseInt(size) <= max){
        return (size +''+ temp_prop);
    } else {
        return "0"
    }
}
export default class App extends Component {
    constructor(props) {
      super(props);

      this.onVideoChange = this.onVideoChange.bind(this);
      this.onAspectRatioChange = this.onAspectRatioChange.bind(this);
      this.onLoopChange = this.onLoopChange.bind(this);
      this.onAutoplayChange = this.onAutoplayChange.bind(this);
      this.onSplashChange = this.onSplashChange.bind(this);
      this.onWidthChange = this.onWidthChange.bind(this);
      this.onHeightChange = this.onHeightChange.bind(this);

      this.onControlsColorChange = this.onControlsColorChange.bind(this);
      this.onControlsHoverChange = this.onControlsHoverChange.bind(this);
      this.onProgressColorChange = this.onProgressColorChange.bind(this);
      this.onBigSplashButtonChange = this.onBigSplashButtonChange.bind(this);

      this.renderMagistoPlayerString = this.renderMagistoPlayerString.bind(this);

      this.state = {
          video_hash: 'K1UZNF1WRGEpUxxhCzE', // portrait video:
          aspect_ratio: '16:9',
          player_width: 'auto',
          player_height: 'auto',
          loop: 0,
          autoplay: 0,
          splash: 1,
          controlsColor: '#ffffff',
          hoverColor: '#51eab2',
          progressColor: '#51eab2',
          bigSplashButton: '#0a0a3c',

      }
    }


    onVideoChange(video_hash){
        this.setState({video_hash});
    }
    onAspectRatioChange(aspect_ratio){
        if(aspect_ratio == 'auto'){
            this.setState({aspect_ratio: 'auto'});
        } else if(aspect_ratio == '16:9' || aspect_ratio == '1:1' || aspect_ratio == '4:3' || aspect_ratio == '3:4'){
            this.setState({player_width: 'auto',player_height: 'auto', aspect_ratio});
        }
    }
    onLoopChange(loop){
        this.setState({loop});
    }
    onAutoplayChange(autoplay){
        this.setState({autoplay});
    }
    onSplashChange(splash){
        this.setState({splash});
    }
    onHeightChange(player_height,min=50,max=1000){
        player_height = getSizeRightType(player_height);
        player_height.replace(' ','');
        if(player_height == '') player_height = 'auto';
        if(!!player_height && player_height !== 'auto' && player_height !== '0')
            this.onAspectRatioChange('auto');
        this.setState({player_height});

    }
    onWidthChange(player_width,min=50,max=1000){
        player_width = getSizeRightType(player_width);
        player_width.replace(' ','');
        if(player_width == '') player_width = 'auto';
        if(!!player_width && player_width !== 'auto' && player_width !== '0')
            this.onAspectRatioChange('auto');

        this.setState({player_width});
    }


    onControlsColorChange(controlsColor){
        this.setState({controlsColor});
    }
    onControlsHoverChange(hoverColor){
        this.setState({hoverColor});
    }
    onProgressColorChange(progressColor){
        this.setState({progressColor});
    }
    onBigSplashButtonChange(bigSplashButton){
        this.setState({bigSplashButton});
    }
    renderMagistoPlayerString(){
        let string_array = [];
        let properties = '';
        for(let key in this.state){

            if((!this.state.player_width || this.state.player_width === 'auto' || this.state.player_width === '0') && (!this.state.player_height || this.state.player_height === 'auto' || this.state.player_height === '0')){
                if(key !== 'player_width' && key !== 'player_height'){
                    string_array.push(`${key}="${this.state[key]}"`);
                }
            } else {
                if(key !== 'aspect_ratio'){
                    const temp_key = key;
                    if(key == 'player_width') key = 'width';
                    if(key == 'player_height') key = 'height';
                    string_array.push(`${key}="${this.state[temp_key]}"`);
                }
            }
        }
        properties = string_array.join(' \n\t');
        return `<MagistoPlayer ${properties} />`
    }



    render() {
        return (
            <div>
                <ForkBanner url="https://github.com/AceDZN/magisto-player" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <MagistoPlayer
                                    video_hash={this.state.video_hash}
                                    autoplay={this.state.autoplay}
                                    loop={this.state.loop}
                                    splash={this.state.splash}
                                    aspect_ratio={this.state.aspect_ratio}
                                    controlsColor={this.state.controlsColor}
                                    hoverColor={this.state.hoverColor}
                                    progressColor={this.state.progressColor}
                                    bigSplashButton={this.state.bigSplashButton}
                                    width={this.state.player_width}
                                    height={this.state.player_height}
                                />


                              <div className="card-body">
                                    <h4 className="card-title">Magisto Embed Player tester</h4>
                                    <p className="card-text">{this.renderMagistoPlayerString()}</p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <MagistoPlayerEditor
                                video_hash={this.state.video_hash} onVideoChange={this.onVideoChange}
                                autoplay={this.state.autoplay} onAutoplayChange={this.onAutoplayChange}
                                loop={this.state.loop} onLoopChange={this.onLoopChange}
                                splash={this.state.splash} onSplashChange={this.onSplashChange}
                                aspect_ratio={this.state.aspect_ratio} onAspectRatioChange={this.onAspectRatioChange}
                                width={this.state.player_width} onWidthChange={this.onWidthChange}
                                height={this.state.player_height} onHeightChange={this.onHeightChange}

                                controlsColor={this.state.controlsColor} onControlsColorChange={this.onControlsColorChange}
                                hoverColor={this.state.hoverColor} onControlsHoverChange={this.onControlsHoverChange}
                                progressColor={this.state.progressColor} onProgressColorChange={this.onProgressColorChange}
                                bigSplashButton={this.state.bigSplashButton} onBigSplashButtonChange={this.onBigSplashButtonChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
