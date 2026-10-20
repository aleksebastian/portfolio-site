import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	// Optional: public repos are readable anonymously; a token only raises the API rate limit.
	GITHUB_TOKEN: { static: true, schema: (value) => value || undefined }
});
