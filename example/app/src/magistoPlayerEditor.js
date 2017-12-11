// @flow
import React, { Component } from 'react';
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
      }
    }
    render() {
        return (
                <form>
                    <div className="form-group row">
                        <label htmlFor="videoHash" className="col-md-6 col-form-label">Video Hash</label>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="videoHash" placeholder="Magisto Video ID (bQcQMUcURGgxXgZiCzE)" onChange={this.props.onVideoChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="aspectRatio" className="col-md-6 col-form-label">Aspect Ratio</label>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="aspectRatio" placeholder="Aspect Ratio (16:9)" onChange={this.props.onAspectRatioChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="videoHash" className="col-md-6 col-form-label">Autoplay</label>
                        <div className="col-md-6">
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input checked={this.props.autoplay==1} onChange={this.props.onAutoplayChange} className="form-check-input" type="radio" name="inlineAutoplayOptions" id="inlineAutoplayOption1" value="1" /> On
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input checked={this.props.autoplay==0}onChange={this.props.onAutoplayChange} className="form-check-input" type="radio" name="inlineAutoplayOptions" id="inlineAutoplayOption0" value="0" /> Off
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="videoHash" className="col-md-6 col-form-label">Splash Screen</label>
                        <div className="col-md-6">
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input checked={this.props.splash==1} onChange={this.props.onSplashChange} className="form-check-input" type="radio" name="inlineSplashOptions" id="inlineSplashOption1" value="1" /> On
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input checked={this.props.splash==0}onChange={this.props.onSplashChange} className="form-check-input" type="radio" name="inlineSplashOptions" id="inlineSplashOption0" value="0" /> Off
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="videoHash" className="col-md-6 col-form-label">Loop</label>
                        <div className="col-md-6">
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input checked={this.props.loop==1} onChange={this.props.onLoopChange} className="form-check-input" type="radio" name="inlineLoopOptions" id="inlineLoopOption1" value="1" /> On
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label">
                                    <input checked={this.props.loop==0}onChange={this.props.onLoopChange} className="form-check-input" type="radio" name="inlineLoopOptions" id="inlineLoopOption0" value="0" /> Off
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <p>Color scheme:</p>
                    <div className="form-group row">
                        <label htmlFor="controlColors" className="col-md-6 col-form-label">Controls Color</label>
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="input-group-addon" style={{height:'38px', padding:0, width:'40px'}}>
                                    <input type="color" className="form-control" id="controlColors" value={this.props.controlsColor} onChange={this.props.onControlsColorChange} style={{height:'38px', padding:0, width:'40px'}}  />

                                </div>
                                <input type="text" className="form-control" id="controlColors2" value={this.props.controlsColor} onChange={this.props.onControlsColorChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hoverColor" className="col-md-6 col-form-label">Hover Color</label>
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="input-group-addon" style={{height:'38px', padding:0, width:'40px'}}>
                                    <input type="color" className="form-control" id="controlColors" value={this.props.hoverColor} onChange={this.props.onControlsHoverChange} style={{height:'38px', padding:0, width:'40px'}} />

                                </div>
                                <input type="text" className="form-control" id="controlColors2" value={this.props.hoverColor} onChange={this.props.onControlsHoverChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="progressColor" className="col-md-6 col-form-label">progress Color</label>
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="input-group-addon" style={{height:'38px', padding:0, width:'40px'}}>
                                    <input type="color" className="form-control" id="controlColors" value={this.props.progressColor} onChange={this.props.onProgressColorChange} style={{height:'38px', padding:0, width:'40px'}} />

                                </div>
                                <input type="text" className="form-control" id="controlColors2" value={this.props.progressColor} onChange={this.props.onProgressColorChange} />
                            </div>
                        </div>

                    </div>
                </form>
        );
    }
}
