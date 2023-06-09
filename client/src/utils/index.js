import FileSaver from 'file-saver';

import { surpriseMePrompts } from '../constants';
export function getRandomPrompt(prompt)
{
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];


    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}

export async function downloadImage(_id,photo)
{
    let link = `download-${_id}.jpg`
 FileSaver.saveAs(photo ,link);
}