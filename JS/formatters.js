export function httpsTransform(link){
    const hasHttps = link.includes('https://');

    hasHttps ? link : `https://${link}`
}