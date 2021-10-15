export function getAssetAsString(assetName: string): Promise<string> {
	return fetch(`/static/${assetName}`).then((r) => r.text());
}
