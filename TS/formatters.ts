export function httpsTransform(link: string){
    const hasHttps = link.includes('https://');

    hasHttps ? link : `https://${link}`;
}