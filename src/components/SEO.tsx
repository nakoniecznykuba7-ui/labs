import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  jsonLd?: object | object[];
}

export default function SEO({
  title,
  description,
  path,
  robots = 'index, follow, max-image-preview:large',
  ogTitle,
  ogDescription,
  ogImage = '/earninglab-icon.png',
  ogType = 'website',
  canonical,
  jsonLd,
}: SEOProps) {
  const normalizedPath = path === '/' ? '' : path.replace(/\/$/, '');
  const canonicalURL = canonical || `https://earninglab.pl${normalizedPath}`;
  const fullURL = `https://earninglab.pl${normalizedPath}`;

  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://earninglab.pl${ogImage}`;

  const isNoIndex = robots.includes('noindex');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalURL} />
      <meta name="robots" content={robots} />
      {isNoIndex && <meta name="googlebot" content="noindex, nofollow" />}
      <meta name="theme-color" content="#070A12" />
      <meta name="application-name" content="EarningLab" />

      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:url" content={fullURL} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="EarningLab" />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:locale" content="pl_PL" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={fullOgImage} />

      {jsonLd && (
        <>
          {Array.isArray(jsonLd) ? (
            jsonLd.map((schema, index) => (
              <script key={index} type="application/ld+json">
                {JSON.stringify(schema)}
              </script>
            ))
          ) : (
            <script type="application/ld+json">
              {JSON.stringify(jsonLd)}
            </script>
          )}
        </>
      )}
    </Helmet>
  );
}
