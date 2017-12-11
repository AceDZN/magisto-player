// @flow
// export all of your component
import React,{ Component } from 'react';

const magistoServer= 'https://www.magisto.com/';
const embed_link = `embed/player/`;

export default class MagistoPlayer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          video_hash: this.props.video_hash || 'K1UZNF1WRGEpUxxhCzE',
          autoplay: this.props.autoplay || 0,
          splash: this.props.splash || (this.props.autoplay ? 0 : 1),
          poster: this.props.poster || false,
          aspect_ratio: this.props.aspect_ratio || '16:9',
          loop: this.props.loop || 1,
          styling: {
              bgcolor: this.props.bgcolor || false,
              controlsColor: this.props.controlsColor || "red",//false,
              bigSplashButton: this.props.bigSplashButton || false,
              progressColor: this.props.progressColor || false,
              hoverColor: this.props.hoverColor || false
          }
      };
    }
    componentWillReceiveProps(nextProps) {
      // You don't have to do this check first, but it can help prevent an unneeded render
      if (!!nextProps.video_hash && nextProps.video_hash !== this.state.video_hash) {
          if(nextProps.video_hash !== ''){
              this.setState({ video_hash: nextProps.video_hash });
          }
      }
      if (nextProps.aspect_ratio !== this.state.aspect_ratio && (nextProps.aspect_ratio == '16:9' || nextProps.aspect_ratio == '4:3' || nextProps.aspect_ratio == '3:4' || nextProps.aspect_ratio == '1:1')) {
          this.setState({ aspect_ratio: nextProps.aspect_ratio });
      }
      if (nextProps.loop !== this.state.loop) {
          this.setState({ loop: nextProps.loop });
      }
      if (nextProps.splash !== this.state.splash) {
          this.setState({ splash: nextProps.splash });
      }
      if (nextProps.autoplay !== this.state.autoplay) {
          this.setState({ autoplay: nextProps.autoplay });
      }
    }

    componentDidMount() {

    }

    getPlayerURL(){
        let video_src = magistoServer+embed_link+`${this.state.video_hash}?embed=true`;
            video_src+=`&autoplay=${this.state.autoplay}`
            +`&splash=${this.state.splash}`;
            if(!!this.props.loop){
                video_src+=`&loop=${this.state.loop}`;
            }







        // Set player colour scheme
        let color = '';
        if(!!this.props.bgcolor){
            color = (this.props.bgcolor[0]=='#' ? encodeURIComponent(this.props.bgcolor) : this.props.bgcolor);
            video_src+=`&bgcolor=${color}`;
        }
        if(!!this.props.controlsColor){
            color = (this.props.controlsColor[0]=='#' ? encodeURIComponent(this.props.controlsColor) : this.props.controlsColor);
            video_src+=`&controlsColor=${color}`;
        }

        if(!!this.props.bigSplashButton){
            color = (this.props.bigSplashButton[0]=='#' ? encodeURIComponent(this.props.bigSplashButton) : this.props.bigSplashButton);
            video_src+=`&bigSplashButton=${color}`;
        }
        if(!!this.props.progressColor){
            color = (this.props.progressColor[0]=='#' ? encodeURIComponent(this.props.progressColor) : this.props.progressColor);
            video_src+=`&progressColor=${color}`;
        }
        if(!!this.props.hoverColor){
            color = (this.props.hoverColor[0]=='#' ? encodeURIComponent(this.props.hoverColor) : this.props.hoverColor);
            video_src+=`&hoverColor=${color}`;
        }

        // return the whole player url
        return video_src;
    }
    renderMagistoPlayer(){
        const apectRatioContainer = { position: 'relative', width: '100%', paddingBottom: this.getAspectRatioPadding() };
        const floatingPlayer = { position: 'absolute', width: '100%', height: '100%', top: 0, left:0, bottom: 0, right:0 };
        const magistoFrame = {width: '100%', height: '100%', border:'0px solid transparent'};
        return (
            <div style={{dispaly:'block'}}>
                <div className="aspect-ratio-container" style={apectRatioContainer}>
                    <div className="floating-player" style={floatingPlayer}>
                        <iframe
                            style={magistoFrame}
                            src={this.getPlayerURL()}
                            allowFullScreen="true"
                            ></iframe>
                    </div>
                </div>
            </div>
        );
    }
    renderMagistoPopup(){
        return (
            <div className="">
                renderMagistoPopup
            </div>
        )
    }
    getAspectRatioPadding(){
        switch(this.state.aspect_ratio) {
            case '16:9':
                return '56.25%'; break;
            case '4:3':
                return '75%'; break;
            case '3:4':
                return '125%'; break;
            case '1:1':
                return '100%'; break;
            default:
                return '56.25%';
        }
    }
    render() {
        return this.renderMagistoPlayer();
    }
}
MagistoPlayer.defaultProps = {
  url: 'https://github.com/AceDZN',
  target:"_blank"
};
