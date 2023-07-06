import { useEffect, useState } from "react";


export default function useOrientation() {
  const [type, setType] = useState(null);
  const [angle, setAngle] = useState(null);

  useEffect(() => {
    if (window) {
      const onChange = () => {
        if (screen.orientation) {
          setType(screen.orientation.type);
          setAngle(screen.orientation.angle);
        } else if (window.orientation !== null) {
          if (window.orientation === 0) {
            setType('portrait-primary')
          } else if (window.orientation === 90) {
            setType('landscape-primary')
          } else if (window.orientation === -90) {
            setType('landscape-secondary')
          }
          setAngle(window.orientation)
        }
      }

      onChange();
      window.addEventListener('orientationchange', onChange)
      return () => window.removeEventListener('orientationchange', onChange)
    }
  }, [])

  return { type, angle }
}
