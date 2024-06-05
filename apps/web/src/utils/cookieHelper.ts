'use server'

import { cookies } from "next/headers"

export const setCookie = (accesstoken: any) => {
  cookies().set('acsstkn', accesstoken)
}
