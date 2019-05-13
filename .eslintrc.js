module.exports = {
root: true,
env: {
node: true
},
'extends': [
'plugin:vue/essential',
'@vue/standard'
],
rules: {
'indent': [0, 2],//缩进4空格
'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
},
parserOptions: {
parser: 'babel-eslint'
}
}
