import * as UploadApi from '../../api/uploadRequest'
import { UPLOAD_START, UPLOAD_SUCCESS, UPLOAD_FAIL } from "../types/uploadTypes"

export const uploadImage = (data) => async (dispatch) => {
    console.log(data, ' que llega')
    try {
        await UploadApi.uploadImage(data);
    } catch (error) {
        console.log(error)
    }
}
export const uploadPost = (data) => async (dispatch) => {
    dispatch({ type: UPLOAD_START });
    try {
        const newPost = await UploadApi.uploadPost(data);
        dispatch({ type: UPLOAD_SUCCESS, data: newPost.data });
    } catch (error) {
        console.log(error);
        dispatch({ type: UPLOAD_FAIL });
    }
};