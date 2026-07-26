const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserOrOrganizationSite = repositoryName.toLowerCase().endsWith('.github.io');
const githubPagesBase = repositoryName && !isUserOrOrganizationSite ? `/${repositoryName}/` : '/';

export default {
  base: process.env.GITHUB_ACTIONS ? githubPagesBase : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
};
