import React, { useRef, useEffect } from 'react';
import { FullScreenViewer as BaseFullScreenViewer } from 'iv-viewer';
import { FullScreenViewerProps } from './types';

export const FullScreenViewer: React.FC<FullScreenViewerProps> = ({
  img,
  hiResImg,
  defaultZoom = 100,
  maxZoom = 500,
  snapView = true,
  refreshOnResize = true,
  zoomOnMouseWheel = true,
  hasZoomButtons = true,
  zoomStep = 50,
  onLoad,
  alt = 'Zoomable Image',
  ...rest
}) => {
  const viewerRef = useRef<BaseFullScreenViewer | null>(null);
  const currentZoom = useRef(defaultZoom);

  const _onLoad = useRef(onLoad);
  _onLoad.current = onLoad;

  useEffect(() => {
    const viewerOptions = {
      zoom: currentZoom.current,
      maxZoom,
      snapView,
      refreshOnResize,
      zoomOnMouseWheel,
      hasZoomButtons,
      zoomStep,
      listeners: {
        onInit: ({ instance }: { instance: BaseFullScreenViewer }) => {
          if (_onLoad.current) {
            _onLoad.current(instance);
          }
        },
      },
    };

    viewerRef.current = new BaseFullScreenViewer(viewerOptions);
    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
      }
    };
  }, [
    img,
    hiResImg,
    maxZoom,
    snapView,
    refreshOnResize,
    zoomOnMouseWheel,
    hasZoomButtons,
    zoomStep,
  ]);

  const handleOnClick = (e: React.MouseEvent<HTMLImageElement>) => {
    rest.onClick?.(e);
    if (viewerRef.current) {
      viewerRef.current.show(img, hiResImg);
    }
  };

  return (
    <img
      {...rest}
      src={img}
      onClick={handleOnClick}
      style={{ cursor: 'pointer', ...rest.style }}
      alt={alt}
    />
  );
};
