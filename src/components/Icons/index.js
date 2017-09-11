import React from 'react';
import PropTypes from 'prop-types'

export const Pencil = ({ width = 22, height = 22 }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 22 22"
  >
    <path
      className="icon"
      d="M21.7,4.6,17.4.3a1.018,1.018,0,0,0-1.436,0L3.041,13.217a1,1,0,0,0-.235.4l-.011,0L0,22l8.387-2.8,0-.011a.985.985,0,0,0,.4-.235L21.7,6.039A1.018,1.018,0,0,0,21.7,4.6ZM4.2,15.814,6.186,17.8,3.21,18.79Zm3.863.992L5.194,13.935l8.614-8.614,2.871,2.871Zm10.05-10.05L15.243,3.885l1.436-1.436L19.55,5.321Z"
    />
  </svg>

Pencil.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}


export const Close = ({ width = 28, height = 28 }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 28 28"
  >
    <path
      className="icon"
      d="M16.83 14L27.413 3.414c.78-.78.78-2.047 0-2.83-.78-.78-2.047-.78-2.83 0L14 11.172 3.415.587c-.78-.78-2.048-.78-2.83 0-.78.782-.78 2.048 0 2.83L11.173 14 .586 24.586c-.78.78-.78 2.047 0 2.83.78.78 2.047.78 2.83 0L14 16.828l10.586 10.585c.78.78 2.047.78 2.83 0 .78-.782.78-2.048 0-2.83L16.828 14z"
    />
  </svg>

Close.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}


export const User = ({ width =  10, height = 10}) =>
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 36 36">
    <path className="icon"
          d="M25.658,25.292c-2.299-0.625-3.576-2.125-3.576-3.25c0,0,0-0.861,0-2.332c1.488-1.146,2.906-3.445,3.418-8.044 C26.582,1.917,21.917,0,18,0s-8.583,1.917-7.5,11.666c0.511,4.598,1.93,6.896,3.417,8.044c0,1.471,0,2.332,0,2.332 c0,1.125-1.277,2.625-3.577,3.25S0,27.834,0,30.834S0,34.5,0,34.5C0,35.292,0.166,36,1.458,36s31.792,0,33.083,0 C35.834,36,36,35.292,36,34.5c0,0,0-0.666,0-3.666S27.959,25.917,25.658,25.292z"></path>
  </svg>

User.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}
