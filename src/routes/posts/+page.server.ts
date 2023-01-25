import fs from 'fs';
import path from 'path';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const dir = path.join(process.cwd());
	const contents = fs.readFileSync(path.join(dir, 'README.md'), 'utf-8');

	return {
		contents
	};
}) satisfies PageServerLoad;
