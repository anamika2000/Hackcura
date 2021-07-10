import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const style = {
    width: '410px',
    height: '350px'
  }
  const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '100%'
  }
export class GoogleMap extends Component {
    
    render() {
      return (
        <Map google={this.props.google} style={style} containerStyle={containerStyle} zoom={14}>
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          {/* <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow> */}
        </Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ('AIzaSyC1N8Vek601AYzRJlLYZMuwWGcdub5gC8w')
  })(GoogleMap)

