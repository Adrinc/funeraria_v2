import { useRive, Layout, Fit, Alignment,  EventType, RiveEventType, decodeImage  } from "@rive-app/react-canvas";
import { useEffect } from 'react';

//NOTA: fit puede ser: "cover", "contain", "fill", "fitWidth", "fitHeight"

export const RiveElement = (props) => {
  const { src, stateMachines, autoplay, artboard, fit, hastext=false, textValues = {} } = props;
  const { RiveComponent, rive } = useRive({
    src: src,
    stateMachines: stateMachines?? null,
    artboard: artboard ?? null,
    automaticallyHandleEvents: true,
    isTouchScrollEnabled: true,
    layout: new Layout({ 
      fit: fit ?? "contain",
      alignment: Alignment.Center,
    }),
    autoplay: autoplay,
    assetLoader: (asset, bytes) => {
      if (asset.isImage) {
        const imageAsset = asset;
        if (asset.name === 'flutter') {
            setImage(imageAsset, '/image/flutterr.webp');
            return true;
        }
        if (asset.name === 'apps' ) {
            setImage(imageAsset, '/image/kauralevento.jpg');
            return true;
        }
        // etc
      }
      return false;
    },
  });

  const setImage = (asset, imageUrl) => {
    fetch(imageUrl).then(async (res) => {
      const image = await decodeImage(new Uint8Array(await res.arrayBuffer()));
      asset.setRenderImage(image);
      image.unref();
    }).catch(error => console.error('Error al cargar la imagen:', error));
  };
  

  useEffect(() => {
    if (rive) {
     
      rive.on(EventType.RiveEvent, onRiveEventReceived);

     if(hastext){
   
      for (const [key, value] of Object.entries(textValues)) {
        rive.setTextRunValue(key, value);
      }


    }
    }
  }, [rive]);


  const onRiveEventReceived = (riveEvent) => {
    const eventData = riveEvent.data;
    const eventProperties = eventData.properties;
    if (eventData.type === RiveEventType.General) {
      console.log(eventData.name);
      // Added relevant metadata from the event


      console.log(eventProperties.mousein);
      
    } else if (eventData.type === RiveEventType.OpenUrl) {
      console.log("Event name", eventData.name);
      // Handle OpenUrl event manually      window.location.href = data.url;
    }
  };

  return <RiveComponent />;
};

export default function Animation(props) {
  const { src, stateMachines, autoplay, artboard, fit, hastext, textValues } = props;
  return (
    <RiveElement 
    style={{width: "100%", height: "100%"}}
    src={src} 
    stateMachines={stateMachines} 
    autoplay={autoplay} 
    artboard={artboard} 
    fit={fit}
    hastext={hastext}
    textValues={textValues}
    />
  );
}