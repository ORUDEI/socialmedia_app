import * as PostApi from "../../api/postRequest"
import { RETREIVING_FAIL, RETREIVING_START, RETREIVING_SUCCESS } from "../types/postTypes"

export const getTimelinePosts = (id) => async (dispatch) => {
    dispatch({ type: RETREIVING_START })
    try {
        const { data } = await PostApi.getTimelinePosts(id);
        dispatch({ type: RETREIVING_SUCCESS, data: data })
    } catch (error) {
        dispatch({ type: RETREIVING_FAIL })
        console.log(error)
    }
}