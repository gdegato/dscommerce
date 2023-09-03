/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { requestBackend } from "../utils/requests";
import * as authService from './auth-service'

export function findMe() {

    const headers = {
        Authorization: "Bearer " + authService.getAccessToken()
    }
    return requestBackend({ url: `/users/me`, headers: headers })
}


