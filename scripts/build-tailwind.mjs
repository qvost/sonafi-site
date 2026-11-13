import { compile } from 'tailwindcss';
import { writeFile } from 'node:fs/promises';
const compiler = await compile('@tailwind utilities;');
await writeFile('src/utilities.css', compiler.build(['sr-only','relative','flex','items-center','justify-between','overflow-hidden','text-white','border','rounded-full','backdrop-blur-xl']));
