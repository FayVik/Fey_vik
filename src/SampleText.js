export const sampleText =
	'# Title\n## Sub-Title \n### Deeper title \n \n Paragraphs are separated\n by an empty line.\n\n Leave two spaces at the end of a line\n to go to the line.\n\n Attributs: *italic*, **bold**, \n`monospace`, ~~striped~~.\n\n List:\n\n * apples\n * oranges\n * pears\n\n Numbered list:\n\n 1. tofu\n 2. mushrooms\n 3. bread\n\n Link with placeholder text: *[Medium](https://www.medium.com)* \n\n Simple link: https://www.medium.com/ \n\n Code: ```\n console.log("Hello folks! I hoped you enjoyed this quick tutorial. Thanks for reading."); \n``` ';

// 	# What's new in Animate.css

// Working on a project and using [Animate.css](https://animate.style/) I discovered that animate.css has upgraded from v3 to v4.

// ## What is Animate.css?

// [Animate.css](https://animate.style/) is a built-in ready-to-use a library that comes with dozens of cross-browser animations. It is very easy to implement when used and it has over 50 different animation effects like bounce, fadeIn, fadeOut, flash, and a lot more. All these animation effects work consistently on all browsers that support CSS3 animation.

// [Animate.css](https://animate.style/) is one of the best animation libraries we can use to make our website attractive and fun for users visiting. We can apply these animations in our project sections like header, footer, or on the text, pictures, buttons, and many more.

// ## What is new?

// [Animate.css](https://animate.style/) has upgraded from v3 to v4 and this new version brought some improvement, improved animations, and new animation and it has added some prefixes for all of the Animate.css classes - defaulting to `animate__` - so a direct migration is no longer possible.

// If you are using the older version of animate.css all you need to do is to migrate from:

// ```
//     animate.min.css
// ```

// To:

// ```
//     animate.compat.css
// ```

// Note that the older version(3.x and under)brought the `animate__` prefix and this new version(v4)brought no prefix at all.

// For those of us using Animate.css CDN all we need to do is to change the CDN link or update the link on our HTML:

// From:

// ```
//     <head>
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
//       />
//     </head>
// ```

// To:

// ```
//     <head>
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css"
//       />
//     </head>
// ```

// And for those using a bundler just change the Import or update it.

// From:

// ```
//     import 'animate.min.css';
// ```

// To:

// ```
//     import 'animate.compat.css';
// ```

// But if you are using the Animate.css in a new project, it's highly recommended to use the default prefixed version.

// ## Concultion

// With [Animate.css](https://animate.style/), we can easily animate any element in our website with one line of code.
// Remember to use it only when it is needed or where it is needed and not for the fun of using animation because animation is used to attract the attention of users visiting our websites.

// [Resource-](https://animate.style/#migration)
