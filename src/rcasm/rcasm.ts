'use strict';

// Inspired by: https://github.com/microsoft/monaco-languages/blob/master/src/mips/mips.ts

import IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
import ILanguage = monaco.languages.IMonarchLanguage;

export const conf: IRichLanguageConfiguration = {
	comments: {
		lineComment: ';'
	}
};

export const language = <ILanguage>{
    defaultToken: '',
    ignoreCase: false,
    tokenPostfix: '.rcasm',

    keywords: [
		'add', 'inc', 'ixy', 'and', 'orr', 'eor', 'not', 'rol', 'cmp',
		'mov', 'clr', 'ldi', 'lds', 'ldr', 'str', 'hlt', 'hlr', 'opc',
        'jmp', 'jsr', 'rts', 'bne', 'beq', 'bcs', 'bmi', 'blt', 'ble'
    ],

    registers: [
        'a', 'b', 'c', 'd', 'j', 'j1', 'j2', 'm', 'm1', 'm2', 'x', 'y', 'xy'
    ],

    symbols: /[\.,\:]+/,

    // The main tokenizer for our languages
    tokenizer: {
        root: [

            // identifiers and keywords
            [/[.a-zA-Z_]\w*/, {
                cases: {
                    'this': 'variable.predefined',
                    '@keywords': { token: 'keyword.$0' },
                    '@registers': 'type.register',
                    '@default': ''
                }
            }],

            // whitespace
            [/[ \t\r\n]+/, ''],

            // Comments
            [/;.*$/, 'comment'],

            // delimiters
            [/@symbols/, 'delimiter'],

            // numbers
            [/0[xX][0-9a-fA-F]+/, 'number.hex'],
            [/0[bB][0-1]+/, 'number.binary'],
            [/[+-]?\d+/, 'number'],

            // Identifiers and keywords
            //      [/^[a-z]+:/, 'identifier'],
            //     [/[a-z]{3}/, {cases: {'@keywords': 'keyword'}}],
            //   [/[a-d]/, {cases: {'@types': 'type'}}],


        ]
    }
}
