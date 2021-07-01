import { Packet } from 'dns-packet';

export interface Options {
  /* Set of endpoints to lookup doh queries.  */
  endpoints?: Array<Endpoint | string>;
  /* Amount of retry's if a request fails, defaults to 5 */
  retries?: number;
  /* Timeout for a single request in milliseconds, defaults to 30000 */
  timeout?: number;
  /* Signal to abort the request */
  signal?: AbortSignal;
}

export interface Endpoint {
  /* Domain name, required! */
  host: string;
  /* Path, prefixed with /, defaults to /dns-query */
  path?: string;
  /* https port, defaults to 443 */
  port?: number;
  /* true, if endpoint logs requests, defaults to false */
  log?: boolean;
  /* true, if endpoint support CORS headers, defaults to false */
  cors?: boolean;
  /* true, if endpoint filters/redirects DNS packets, defaults to false */
  filter?: boolean;
  /* link to documentation, if available */
  docs?: string;
  /* Known geographical location */
  location?: string;
  /* Method to request dns, defaults to GET */
  method?: 'post' | 'Post' | 'POST' | 'get' | 'Get' | 'GET';
  /* DEBUG ONLY! false to use http to connect instead of https, defaults to true */
  https?: boolean;
}

export function query(packet: Packet, options?: Options): Promise<Packet & {
  endpoint: Endpoint;
}>;

export class AbortError extends Error {
  constructor();
  code: 'ABORT_ERR';
  name: 'AbortError';
}
export class HTTPStatusError extends Error {
  constructor(uri: string, status: number, method: string);
  uri: string;
  status: number;
  method: 'POST' | 'GET';
  code: 'HTTP_STATUS';
  name: 'StatusError';
}
export class ResponseError extends Error {
  constructor(message: string)
  code: 'RESPONSE_ERR';
  name: 'ResponseError';
}
export class TimeoutError extends Error {
  constructor(timeout: number)
  timeout: number;
  code: 'ETIMEOUT';
  name: 'TimeoutError';
}
export const endpoints: {
  cloudflare: Endpoint;
  cloudflareFamily: Endpoint;
  cloudflareSecurity: Endpoint;
  cloudflareEth: Endpoint;
  aAndA: Endpoint;
  usablePrivacy: Endpoint;
  adguard: Endpoint;
  adguardFamily: Endpoint;
  adguardUnfiltered: Endpoint;
  ahadnsIn: Endpoint;
  ahadnsIt: Endpoint;
  ahadnsEs: Endpoint;
  ahadnsNo: Endpoint;
  ahadnsNl: Endpoint;
  ahadnsPl: Endpoint;
  ahadnsNy: Endpoint;
  ahadnsChi: Endpoint;
  ahadnsAu: Endpoint;
  ahadnsLa: Endpoint;
  alidns: Endpoint;
  amsNl: Endpoint;
  amsSe: Endpoint;
  amsEs: Endpoint;
  arapurayil: Endpoint;
  digitaleGesellschaft: Endpoint;
  dnsForFamily: Endpoint;
  dnsForge: Endpoint;
  dnsHome: Endpoint;
  dnsPod: Endpoint;
  blahDnsCh: Endpoint;
  blahDnsSg: Endpoint;
  blahDnsJp: Endpoint;
  blahDnsDe: Endpoint;
  blahDnsFi: Endpoint;
  cleanBrowsingSecurity: Endpoint;
  cleanBrowsingFamily: Endpoint;
  cleanBrowsingAdult: Endpoint;
  appliedPrivacy: Endpoint;
  ffmuc: Endpoint;
  tiarap: Endpoint;
  tiarapJp: Endpoint;
  google: Endpoint;
  he: Endpoint;
  iij: Endpoint;
  libredns: Endpoint;
  librednsAds: Endpoint;
  linuxSec: Endpoint;
  linuxSecAdGuard: Endpoint;
  njalla: Endpoint;
  opendns: Endpoint;
  opendnsFamily: Endpoint;
  powerDNS: Endpoint;
  sebyVultr: Endpoint;
  sebyOVH: Endpoint;
  quad9: Endpoint;
  quad9Ads: Endpoint;
  switchCh: Endpoint;
  yepdns: Endpoint;
  lavaDnsEU1: Endpoint;
  controlId: Endpoint;
  controlIdMw: Endpoint;
  controlIdAds: Endpoint;
  controlIdSoc: Endpoint;
  rubyfish: Endpoint;
  uncensoredAny: Endpoint;
  uncensoredUni: Endpoint;
  dnssb: Endpoint;
  dnssbGlobal: Endpoint;
  dbssbDeDus: Endpoint;
  dnssbDeFra: Endpoint;
  dnssbNlAms: Endpoint;
  dnssbNlAms2: Endpoint;
  dnssbUkLon: Endpoint;
  dnssbEeTll: Endpoint;
  dnssbJpKix: Endpoint;
  dnssbHkHkg: Endpoint;
  dnssbAuSyd: Endpoint;
  dnssbUsChi: Endpoint;
  dnssbInBlr: Endpoint;
  dnssbSgSin: Endpoint;
  dnssbKrSel: Endpoint;
  dnssbRuMow: Endpoint;
  ethlink: Endpoint;
};
