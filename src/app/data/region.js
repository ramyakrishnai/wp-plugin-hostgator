/**
 * Big JS object to contain all hostgator links per market
 * 
 * Each value should be an object with a default value
 * as well as a value for each region with a key that matches 
 * the locale for that country (not language)
 * 
 * default - US (.com market)
 * BR - Brazil
 * MX - Mexico
 * CL - Chile
 * CO - Colombia
 * 
 * the value can be omitted and the default will be used
 * the value can also be set to false 
 *  - to check if the market should omit the block containing the link altogether
 * 
 */

const region = {
    main: {
        default: 'https://www.hostgator.com',
        BR: 'https://www.hostgator.com.br',
        MX: 'https://www.hostgator.mx',
        CL: 'https://www.hostgator.cl',
        CO: 'https://www.hostgator.co',
    },
    home_manage_sites: {
        default: 'https://portal.hostgator.com/packages',
        BR: 'https://cliente.hostgator.com.br/',
        MX: 'https://cliente.hostgator.mx/',
        CL: 'https://cliente.hostgator.cl/',
        CO: 'https://cliente.hostgator.co/',
    },
    home_manage_email: {
        default: 'https://portal.hostgator.com/email',
        BR: 'https://cliente.hostgator.com.br/emails-list',
        MX: 'https://cliente.hostgator.mx/emails-list',
        CL: 'https://cliente.hostgator.cl/emails-list',
        CO: 'https://cliente.hostgator.co/emails-list',
    },
    home_find_domain: {
        default: 'https://portal.hostgator.com/domain/purchase/registration',
        BR: 'https://www.hostgator.com.br/registro-de-dominio/',
        MX: 'https://www.hostgator.mx/dominios/',
        CL: 'https://www.hostgator.cl/dominios/',
        CO: 'https://www.hostgator.co/dominios/',
    },
    help_phone_number: {
        default: 'tel:8669642867',
        BR: 'false', // a string false value will remove this section
        MX: 'false', // a string false value will remove this section
        CL: 'false', // a string false value will remove this section
        CO: 'false', // a string false value will remove this section
    },
    help_chat: {
        default: 'https://helpchat.hostgator.com/',
        BR: 'https://financeiro.hostgator.com.br/chat/?country=br&department=technical', // ideally to be open in a popup, not new tab
        MX: 'https://billing.hostgator.mx/chat/?country=mx&department=technical',
        CL: 'https://billing.hostgator.mx/chat/?country=cl&department=technical',
        CO: 'https://billing.hostgator.mx/chat/?country=co&department=technical',
    },
    help_twitter: {
        default: 'https://twitter.com/hgsupport',
        BR: 'https://twitter.com/hostgatorbrasil',
        MX: 'https://twitter.com/HostGatorES',
        CL: 'https://twitter.com/HostGatorES',
        CO: 'https://twitter.com/HostGatorES',
    },
    help_kb: {
        default: 'https://www.hostgator.com/help',
        BR: 'https://suporte.hostgator.com.br/hc/pt-br',
        MX: 'https://soporte-latam.hostgator.com/hc/es-419',
        CL: 'https://soporte-latam.hostgator.com/hc/es-419',
        CO: 'https://soporte-latam.hostgator.com/hc/es-419',
    },
    help_blog: {
        default: 'https://www.hostgator.com/blog/',
        BR: 'https://www.hostgator.com.br/blog/',
        MX: 'https://www.hostgator.mx/blog/',
        CL: 'https://www.hostgator.mx/blog/',
        CO: 'https://www.hostgator.mx/blog/',
    },
    help_youtube: {
        default: 'https://www.youtube.com/c/hostgatorUS',
        BR: 'https://www.youtube.com/c/HostGatorBrasil',
        MX: 'https://www.youtube.com/c/HostGatorM%C3%A9xico',
        CL: 'https://www.youtube.com/c/HostGatorM%C3%A9xico',
        CO: 'https://www.youtube.com/c/HostGatorM%C3%A9xico',
    },

};

export default region;