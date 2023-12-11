import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const { nextUrl: url, geo } = request;
    const geoResponse = geo?.city;
    let city: string = '';
    let locationError = 'false';

    if (geoResponse) {
        city = geoResponse;
    } else {
        city = '';
        locationError = 'true';
    }

    const response = NextResponse.next();
    response.cookies.set('location', city);
    response.cookies.set('locationError', locationError);

    return response;
}
