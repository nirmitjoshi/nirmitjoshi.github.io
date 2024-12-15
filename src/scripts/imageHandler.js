import fs from 'fs';
import path from 'path';

export function handleImage(frontmatterImage) {
	if (!frontmatterImage) {
		return '/assets/defaultSiteImg.png';
	}

	const sourceImagePath = path.join(process.cwd(), 'src', 'assets', frontmatterImage);
	const publicAssetsDir = path.join(process.cwd(), 'public', 'assets');
	const fileName = path.basename(frontmatterImage);
	const destinationImagePath = path.join(publicAssetsDir, fileName);

	try {
		if (!fs.existsSync(publicAssetsDir)) {
			fs.mkdirSync(publicAssetsDir, { recursive: true });
		}

		if (!fs.existsSync(sourceImagePath)) {
			console.warn(`Source image not found: ${sourceImagePath}`);
			return '/assets/defaultSiteImg.png';
		}

		fs.copyFileSync(sourceImagePath, destinationImagePath);

		return `/assets/${fileName}`;
	} catch (error) {
		console.error('Error copying image:', error);
		return '/assets/defaultSiteImg.png';
	}
}
