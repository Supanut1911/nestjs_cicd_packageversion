const config = {
  branches: 'main',
  repositoryUrl:
    'https://github.com/Supanut1911/nestjs_cicd_packageversion.git',
  debug: 'false',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Semantic Versioning Changelog',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'dist/*.js', 'dist/*.js.map'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'release/**',
          },
        ],
      },
    ],
  ],
};

module.exports = config;
