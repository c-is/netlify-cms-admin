// import React, { Suspense, lazy } from 'react'
import CMS, { init } from 'netlify-cms'
// import DesignWidget from './widgets/Design'
import DesignCard from './cards/DesignCard'
// import enhance from './withStyleSheet'
// import frontendResetCSS from '@frontend/reset.css'

// const LazyDesignPreview = lazy(() =>
// 	import(/* webpackChunkName: "DesignPreview" */
// 	'@frontend/templates/design/preview'),
// )

// const DesignPreview = props => (
// 	<Suspense fallback={<div>Loading...</div>}>
// 		<LazyDesignPreview {...props} />
// 	</Suspense>
// )

// CMS.registerPreviewTemplate('design', enhance(DesignPreview))
// CMS.registerPreviewStyle('https://campus.netlify.com/fonts.css')
// CMS.registerPreviewStyle(frontendResetCSS, { raw: true })
// CMS.registerWidget('design', DesignWidget)

CMS.registerEntryCard('design', DesignCard)

init()
