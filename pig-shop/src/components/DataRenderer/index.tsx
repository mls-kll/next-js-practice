import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
  
type DataRendererProps = {
  document: object
}

 const DataRenderer = ({ document }: DataRendererProps) => {
  return(
    <>
     {documentToReactComponents(document)}
    </>
  )
}

export default DataRenderer;