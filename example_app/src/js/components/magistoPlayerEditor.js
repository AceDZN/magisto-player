// @flow
import React, { Component } from 'react';
import { FormRow } from './partials/form-row';

export class MagistoPlayerEditor extends Component {
    constructor(props) {
      super(props);
      this.state = {
          video_hash: this.props.video_hash,
          aspect_ratio: this.props.aspect_ratio,
          loop: this.props.loop,
          splash: this.props.splash,
          autoplay: this.props.autoplay,
          controlsColor: this.props.controlsColor,
          hoverColor: this.props.hoverColor,
          progressColor: this.props.progressColor,
          player_width: this.props.width,
          player_height: this.props.height,

      }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.aspectRatio)
            this.setState(aspect_ratio: nextProps.aspect_ratio);
    }
    changeVideo(video){
        if(video.hash)
            this.props.onVideoChange(video.hash);
        if(video.ratio){
            this.onAspectRatioChange(video.ratio);
        }
    }
    onAspectRatioChange(aspect_ratio){
        this.setState({aspect_ratio});
        this.props.onAspectRatioChange(aspect_ratio);
    }
    render() {
        return (
                <form>
                    <FormRow label="Magisto Video ID" input_id="videoHash">
                        <input type="text" className="form-control" id="videoHash" placeholder={this.props.video_hash} onChange={(event)=>this.props.onVideoChange(event.target.value)} />
                    </FormRow>
                    <FormRow label="Aspect Ratio" input_id="aspectRatio">
                        <input type="text" className="form-control" id="aspectRatio" placeholder={this.props.aspect_ratio} onChange={(event)=>this.onAspectRatioChange(event.target.value)}  value={this.state.aspect_ratio} />
                    </FormRow>
                    <FormRow label="Autoplay" input_id="inlineAutoplayOptions">
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input checked={this.props.autoplay == 1} onChange={(event)=>this.props.onAutoplayChange(event.target.value)} className="form-check-input" type="radio" name="inlineAutoplayOptions" id="inlineAutoplayOption1" value="1" /> On
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input checked={this.props.autoplay == 0}onChange={(event)=>this.props.onAutoplayChange(event.target.value)} className="form-check-input" type="radio" name="inlineAutoplayOptions" id="inlineAutoplayOption0" value="0" /> Off
                            </label>
                        </div>
                    </FormRow>
                    <FormRow label="Splash Screen" input_id="aspectRatio">
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input checked={this.props.splash==1} onChange={(event)=>this.props.onSplashChange(event.target.value)} className="form-check-input" type="radio" name="inlineSplashOptions" id="inlineSplashOption1" value="1" /> On
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input checked={this.props.splash==0}onChange={(event)=>this.props.onSplashChange(event.target.value)} className="form-check-input" type="radio" name="inlineSplashOptions" id="inlineSplashOption0" value="0" /> Off
                            </label>
                        </div>
                    </FormRow>
                    <FormRow label="Loop" input_id="inlineLoopOptions">
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input checked={this.props.loop==1} onChange={(event)=>this.props.onLoopChange(event.target.value)} className="form-check-input" type="radio" name="inlineLoopOptions" id="inlineLoopOption1" value="1" /> On
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input checked={this.props.loop==0} onChange={(event)=>this.props.onLoopChange(event.target.value)} className="form-check-input" type="radio" name="inlineLoopOptions" id="inlineLoopOption0" value="0" /> Off
                            </label>
                        </div>
                    </FormRow>
                    <div className="form-group row">
                        <div className="col-md-6">
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon">width</div>
                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="auto" value={this.props.player_width} onChange={(event)=>this.props.onWidthChange(event.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon">height</div>
                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="auto" value={this.props.player_height} onChange={(event)=>this.props.onHeightChange(event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <p className="text-primary"><strong>Color scheme:</strong></p>
                    <FormRow label="Controls Color" input_id="controlColors">
                        <div className="input-group">
                            <div className="input-group-addon" style={{height:'38px', padding:0, width:'40px'}}>
                                <input type="color" className="form-control" id="controlColors" value={this.props.controlsColor} onChange={(event)=>this.props.onControlsColorChange(event.target.value)} style={{height:'38px', padding:0, width:'40px'}}  />
                            </div>
                            <input type="text" className="form-control" id="controlColors2" value={this.props.controlsColor} onChange={(event)=>this.props.onControlsColorChange(event.target.value)} />
                        </div>
                    </FormRow>
                    <FormRow label="Hover Color" input_id="hoverColor">
                        <div className="input-group">
                            <div className="input-group-addon" style={{height:'38px', padding:0, width:'40px'}}>
                                <input type="color" className="form-control" id="hoverColor" value={this.props.hoverColor} onChange={(event)=>this.props.onControlsHoverChange(event.target.value)} style={{height:'38px', padding:0, width:'40px'}} />
                            </div>
                            <input type="text" className="form-control" id="hoverColor2" value={this.props.hoverColor} onChange={(event)=>this.props.onControlsHoverChange(event.target.value)} />
                        </div>
                    </FormRow>
                    <FormRow label="Progress Color" input_id="progressColor">
                        <div className="input-group">
                            <div className="input-group-addon" style={{height:'38px', padding:0, width:'40px'}}>
                                <input type="color" className="form-control" id="progressColor" value={this.props.progressColor} onChange={(event)=>this.props.onProgressColorChange(event.target.value)} style={{height:'38px', padding:0, width:'40px'}} />
                            </div>
                            <input type="text" className="form-control" id="progressColor2" value={this.props.progressColor} onChange={(event)=>this.props.onProgressColorChange(event.target.value)} />
                        </div>
                    </FormRow>
                    <FormRow label="Big Play / Pause Icon" input_id="bigSplashBtnColor">
                        <div className="input-group">
                            <div className="input-group-addon" style={{height:'38px', padding:0, width:'40px'}}>
                                <input type="color" className="form-control" id="bigSplashBtnColor" value={this.props.bigSplashButton} onChange={(event)=>this.props.onBigSplashButtonChange(event.target.value)} style={{height:'38px', padding:0, width:'40px'}} />
                            </div>
                            <input type="text" className="form-control" id="bigSplashBtnColor2" value={this.props.bigSplashButton} onChange={(event)=>this.props.onBigSplashButtonChange(event.target.value)} />
                        </div>
                    </FormRow>
                    <br /> <hr /><br />
                    <p className="text-primary"><strong>Some videos you can test with:</strong></p>
                    <ul className="example_videos_list row">
                        <li onClick={()=>this.changeVideo({hash:'K1QFalAXRD49XU4B',ratio:'3:4'})} className="col">
                            <div className="alert alert-success" role="alert"><strong>Portrait</strong></div>
                        </li>
                        <li onClick={()=>this.changeVideo({hash:'LwAaK0QBBzw9WEdhCzE',ratio:'16:9'})} className="col">
                            <div className="alert alert-info" role="alert"><strong>Landscape</strong></div>
                        </li>
                        <li onClick={()=>this.changeVideo({hash:'N0ARJFMBQWwoXRVpYw',ratio:'1:1'})} className="col">
                            <div className="alert alert-warning" role="alert"><strong>Square</strong></div>
                        </li>
                    </ul>
                </form>
        );
    }
}
