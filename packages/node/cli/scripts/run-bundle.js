if (process.env.CE_BUILD === 'bundle') {
  import('../dist/index.js')
} else {
  import('../src/index')
}
