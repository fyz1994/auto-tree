module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]
    ]
  },
  webpack: {
    rules: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#1DA57A'
        }
      }
    },
    extra: {
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      module: {
        rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
      },
    },
  }
}
