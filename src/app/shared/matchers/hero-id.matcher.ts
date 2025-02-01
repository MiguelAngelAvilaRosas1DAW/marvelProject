import { UrlMatchResult, UrlSegment } from "@angular/router";

export function heroIdMatcher(UrlSegments:UrlSegment[]): UrlMatchResult | null {
    if (!UrlSegments[0].path.match(/^\d+$/gm)) {
        return null;
    }
    return {
        consumed: UrlSegments,
        posParams: {
            id: new UrlSegment(UrlSegments[0].path, {})
        }
    }
}