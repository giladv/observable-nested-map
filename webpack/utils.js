const loaderUtils = require('loader-utils');
const path = require('path');

const toCamelCase = str => str.split('-').map(part => part[0].toUpperCase() + part.slice(1)).join('');

module.exports.getReadableCssClassName = (loaderContext, localIdentName, localName, options) => {
	const pathParts = loaderContext.resourcePath.split(path.sep);
	const fileName = pathParts[pathParts.length - 1].split('.').shift();
	const folderName = pathParts[pathParts.length - 2];

	let identifier;
	if(fileName === 'style'){
		identifier = toCamelCase(folderName);
	}else{
		identifier = toCamelCase(fileName);
	}

	const hash = loaderUtils.getHashDigest(loaderContext.resourcePath, 'md5', 'base64', 2);

	return `${identifier}-${localName}-${hash}`;
};





module.exports.getDistPath = () => path.resolve(__dirname, '../dist');