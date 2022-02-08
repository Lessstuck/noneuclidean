let formats = ['iife', 'es', 'cjs']

export default formats.map(function(format) {
    return{
        input: 'noneuclidean.js',
        output: {
            file: `../build/noneuclidean.${format === 'es' ? 'mjs' : `${format}.js`}`,
            format: format,
            name: 'noneuclidean'
        }
    }
})
    