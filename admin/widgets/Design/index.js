import { createCustomRelationWidget } from 'netlify-cms'
// import {renderSuggestion} from './Suggestion'

const { control, preview } = createCustomRelationWidget({
	collection: 'design',
	displayName: 'DesignControl',
	searchFields: ['category', 'title'],
})

export default control
export { preview }
