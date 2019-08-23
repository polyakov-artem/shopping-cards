import React from 'react'
import SortBy from './../SortBy/SortBy';

const ResultsPanel = ({resultsNum}) => (
  <div className='results-panel'>
    <p><span>{resultsNum}</span> Product(s) found</p>
    <SortBy classes={['results-panel__sortby']}/>
  </div>
)

export default ResultsPanel