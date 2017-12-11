// images

export function getImages() {
	return {
		type: 'GET_IMAGES'
	};
}

export function uploadImage() {
	return {
		type: 'UPLOAD_IMAGE'
	};
}

export function postImage() {
	return {
		type: 'POST_IMAGE'
	};
}

export function setFilters(filters) {
	return {
		type: 'SET_FILTERS',
		payload: filters
	};
}

// comments
export function addComment(text) {
	return {
		type: 'ADD_COMMENT',
		text
	}
}

/*let commentId = 2
export const addComment = (text) => ({
  type: 'ADD_COMMENT',
  id: commentId++,
  text
})*/

export function getComments() {
	return {
		type: 'GET_COMMENTS',
	}
}