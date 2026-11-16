import {devices,requests} from '../data/seed';
export const initial=()=>({devices:structuredClone(devices),requests:structuredClone(requests)});
export function load(){try{const x=JSON.parse(localStorage.getItem('club-gear'));if(x&&Array.isArray(x.devices)&&Array.isArray(x.requests))return x;}catch{}return initial()}
export const save=x=>localStorage.setItem('club-gear',JSON.stringify(x));
export const conflicts=(r,all)=>all.some(x=>x.id!==r.id&&x.deviceId===r.deviceId&&['Đã duyệt','Đang mượn'].includes(x.status)&&x.start<=r.end&&r.start<=x.end);
export const dateVN=s=>s?.split('-').reverse().join('/');
