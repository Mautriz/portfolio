import { assets } from '$app/paths';

export function getAssetAsString(assetName: string): Promise<string> {
	return fetch(`${assets}/${assetName}`).then((r) => r.text());
}
