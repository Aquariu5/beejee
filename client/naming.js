module.exports = {
  namingConvention: [
    {
      selector: 'default',
      format: ['camelCase'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
    },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
    {
      selector: 'enum',
      format: ['PascalCase', 'UPPER_CASE'],
    },
    {
      selector: 'enumMember',
      format: ['PascalCase', 'UPPER_CASE'],
    },
  ],
}
