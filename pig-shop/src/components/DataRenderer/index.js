import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
  
export default function DataRenderer ({ document }) {
  return(
    <>
     {documentToReactComponents(document)}
    </>
  )
}