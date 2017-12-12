// @flow
import React, { Component } from 'react';
import { MagistoPlayer } from 'components';
import { MagistoPlayerEditor } from './magistoPlayerEditor';

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
          loop: 0,
          autoplay: 1,
          splash: 0,
          controlsColor: '#ffffff',
          hoverColor: '#51eab2',
          progressColor: '#51eab2',
          bigSplashButton: '#0a0a3c'
      }
    }


    onVideoChange(video_hash){
        this.setState({video_hash});
    }
    onAspectRatioChange(aspect_ratio){
        this.setState({aspect_ratio});
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
    onHeightChange(player_height){
        this.onAspectRatioChange('auto');
        this.setState({player_height});
    }
    onWidthChange(player_width){
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
        for(const key in this.state){
            if(this.state.player_width !== 'auto' || this.state.player_height !== 'auto'){
                if(key !== 'aspect_ratio'){
                    string_array.push(key+'='+this.state[key])
                }
            } else{
                string_array.push(key+'='+this.state[key])
            }
        }
        properties = string_array.join(' \n\t');
        return `<MagistoPlayer ${properties} />`
    }



    render() {
        return (
            <div className="container">
                <div className="row" style={{marginTop: '100px'}}>
                    <div className="col-md-6">
                        <div className="card" style={{overflow:'hidden'}}>
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
                            height={this.state.player_width} onHeightChange={this.onHeightChange}

                            controlsColor={this.state.controlsColor} onControlsColorChange={this.onControlsColorChange}
                            hoverColor={this.state.hoverColor} onControlsHoverChange={this.onControlsHoverChange}
                            progressColor={this.state.progressColor} onProgressColorChange={this.onProgressColorChange}
                            bigSplashButton={this.state.bigSplashButton} onBigSplashButtonChange={this.onBigSplashButtonChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
