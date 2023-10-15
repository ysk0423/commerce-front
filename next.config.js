/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      styledComponents: true,
    };
    // 本番環境ではテストIDは不要なので削除する
    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        reactRemoveProperties: {
          properties: ['^data-testid$'],
        },
      };
    }
    return compilerConfig;
  })(),
};

module.exports = nextConfig;
