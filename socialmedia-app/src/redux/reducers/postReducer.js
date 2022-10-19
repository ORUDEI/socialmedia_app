import { RETREIVING_FAIL, RETREIVING_START, RETREIVING_SUCCESS } from "../types/postTypes"
import { UPLOAD_START, UPLOAD_SUCCESS, UPLOAD_FAIL } from "../types/uploadTypes"


const postReducer = (
    state = { post: [], loading: false, error: false, uploading: false }, action
) => {
    switch (action.type) {
        case UPLOAD_START:
            return { ...state, uploading: true, error: false }
        case UPLOAD_SUCCESS:
            return { ...state, posts: [action.data, ...state.post], uploading: false, error: false }
        case UPLOAD_FAIL:
            return { ...state, uploading: false, error: true }
        case RETREIVING_START:
            return { ...state, loading: true, error: false };
        case RETREIVING_SUCCESS:
            return { ...state, posts: action.data, loading: false, error: false };
        case RETREIVING_FAIL:
            return { ...state, loading: false, error: true };
        default:
            return state
    }
}

export default postReducer;