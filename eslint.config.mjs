import globals from 'globals'
import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    languageOptions: { globals: globals.node },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
    }
  },
  pluginJs.configs.recommended
]
