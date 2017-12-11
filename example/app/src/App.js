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


      this.onControlsColorChange = this.onControlsColorChange.bind(this);
      this.onControlsHoverChange = this.onControlsHoverChange.bind(this);
      this.onProgressColorChange = this.onProgressColorChange.bind(this);

      this.renderMagistoPlayerString = this.renderMagistoPlayerString.bind(this);

      this.state = {
          video_hash: 'K1UZNF1WRGEpUxxhCzE',
          aspect_ratio: '16:9',
          loop: 0,
          autoplay: 1,
          splash: 0,
          controlsColor: '#F1C400',
          hoverColor: '#EA7600',
          progressColor: '#E24B40'
      }
    }


    onVideoChange(event){
        console.log('onVideoChange',event.target.value);
        //bQcQMUcURGgxXgZiCzE
        this.setState({video_hash: event.target.value});
    }
    onAspectRatioChange(event){
        this.setState({aspect_ratio: event.target.value});
    }
    onLoopChange(event){
        this.setState({loop: event.target.value});
    }
    onAutoplayChange(event){
        this.setState({autoplay: event.target.value});
    }
    onSplashChange(event){
        this.setState({splash: event.target.value});
    }


    onControlsColorChange(event){
        this.setState({controlsColor: event.target.value});
    }
    onControlsHoverChange(event){
        this.setState({hoverColor: event.target.value});
    }
    onProgressColorChange(event){
        this.setState({progressColor: event.target.value});
    }
    renderMagistoPlayerString(){
        return `<MagistoPlayer
            \n\tvideo_hash="${this.state.video_hash}"
            \n\tautoplay="${this.state.autoplay}"
            \n\tloop="${this.state.loop}"
            \n\tsplash="${this.state.splash}"
            \n\taspect_ratio="${this.state.aspect_ratio}"

            \n\tcontrolsColor="${this.state.controlsColor}"
            \n\thoverColor="${this.state.hoverColor}"
            \n\tprogressColor="${this.state.progressColor}"
        />`
    }



    render() {
        return (
            <div className="container">
                <div className="row" style={{marginTop: '100px'}}>
                    <div className="col-md-6">
                        <div className="card" >
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

                            controlsColor={this.state.controlsColor} onControlsColorChange={this.onControlsColorChange}
                            hoverColor={this.state.hoverColor} onControlsHoverChange={this.onControlsHoverChange}
                            progressColor={this.state.progressColor} onProgressColorChange={this.onProgressColorChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
