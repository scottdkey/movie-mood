// See https://kit.svelte.dev/docs/types#app

import type { ThemeVal } from './lib/stores/theme';

// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
			env: {
				COUNTER: DurableObjectNamespace;
			};
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache };
		}
		interface Locals {
			theme?: ThemeVal;
		}
	}
}

export {};
