import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server"

export async function GET(request : NextRequest) {

    const requestHeaders = new Headers(request.headers)
    const headerLists = (await headers())
    const cookieList = (await cookies())

    
    
    ;(await cookies()).set("resultsPerPage", "20")

    const theme = request.cookies.get('theme')



    console.log(requestHeaders.get('Authorization'));
    console.log(headerLists.get("Authorization"));
    console.log(cookieList.get("resultsPerPage"));
    
    
    console.log(theme);
    

    return new Response('<h1>profile api</h1>', {
        headers : {'Content-Type' : 'text/html', "Set-Cookie" : "theme=dark"},
        
    })
}