export function httpsTransform(link: string){
    const hasHttps = link.includes('https://');

    hasHttps ? link : `https://${link}`;
}

export function formatToBRL(money: numbe){
    const formattedNumber = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(money);

    return formattedNumber;
}