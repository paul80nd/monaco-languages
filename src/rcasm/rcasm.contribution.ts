/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { registerLanguage } from '../_.contribution';

registerLanguage({
	id: 'rcasm',
	extensions: ['.rcasm'],
	aliases: ['RCASM'],
	mimetypes: ['text/x-rcasm', 'text/rcasm', 'text/plaintext'],
	loader: () => import('./rcasm')
});
