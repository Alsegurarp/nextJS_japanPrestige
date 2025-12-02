import React, { useMemo } from 'react';
import MediaFeature from '../../../Componentes/Sections/MediaFeature/MediaFeature.jsx';


const MediaFeatureList = React.memo(function MediaFeatureList({infoCards: data}) {
  return (
    <div>
      {data.map((s) => (
        <MediaFeature
          image={s.image}
          altText={s.altText}
          title={s.title}
          subtitle={s.subtitle}
          text={s.text}
          key={s.title}
          objectPosition={s.objectPosition}
        />
      ))}
    </div>
  );
})

export default MediaFeatureList;