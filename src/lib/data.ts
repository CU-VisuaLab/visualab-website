import { getCollection } from 'astro:content';
export const publications = async () => (await getCollection('publications')).sort((a,b)=> b.data.year-a.data.year || a.data.title.localeCompare(b.data.title));
export const themes = async () => (await getCollection('themes')).sort((a,b)=>a.data.order-b.data.order);
export const projects = async () => getCollection('projects');
export const people = async () => (await getCollection('people')).sort((a,b)=>a.data.order-b.data.order);

export const tools = async () => (await getCollection('tools')).sort((a,b)=>a.data.order-b.data.order || a.data.title.localeCompare(b.data.title));
