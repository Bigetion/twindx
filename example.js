const twsx = require('./src');

const css = twsx({
  '.card': ['bg-white shadow-md rounded p-4', {
    '&:hover': 'shadow-lg',
    '.title': 'text-lg font-semibold text-gray-800 md:text-xl',
    '.content': 'text-gray-600 mt-2'
  }]
});

console.log(css);
