import React, { useEffect } from 'react';
import { SEOMetadata } from '../types';
import { updateSEO } from '../utils/seo';

const SEO: React.FC<SEOMetadata> = (props) => {
  useEffect(() => {
    updateSEO(props);
  }, [props]);

  return null;
};

export default SEO;