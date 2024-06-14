import { NextResponse } from "next/server"

const  coo = 'nextjs'

export const middleware = (request)=>{
    // return NextResponse.rewrite(new URL('/about/history',request.url))
    const cookies = request.cookies.get('token')
    if(!cookies || cookies.value !==coo){
        return NextResponse.redirect(new URL('/login',request.url))
    }
    return NextResponse.next()
}
export const config = {
    matcher: '/about',
  }