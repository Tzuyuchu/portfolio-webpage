import { useState, useEffect } from 'react';

type WindowDimension = {
    width: number,
    height: number
}

function getWindowDimensions(): WindowDimension {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const useWindowDimensions = (): WindowDimension => {
  let windowDimensions = { width: 0, height: 0 };
  const setWindowDimensions = (newDim: WindowDimension) => {
    windowDimensions = {
      width: newDim.width,
      height: newDim.height
    }
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}