# Prerendering dla SEO

## Cel
Prerendering generuje statyczne HTML dla każdej trasy, dzięki czemu:
- Boty social media (Facebook, Twitter, LinkedIn) widzą meta tagi OG bez JS
- Google szybciej indeksuje strony
- Lepsza wydajność First Contentful Paint

## Trasy do prerenderowania
- `/` (home)
- `/programy`
- `/wyniki`
- `/kontakt`
- `/konsultacja`

**NIE prerenderuj** `/zakup` (ma noindex).

## Opcje implementacji

### Opcja 1: Netlify (Prerender włączony automatycznie)
Jeśli hostujesz na Netlify, prerender jest dostępny natywnie:
1. W ustawieniach projektu włącz "Prerender"
2. Netlify automatycznie prerenderuje wszystkie trasy
3. Meta tagi OG będą widoczne dla botów

### Opcja 2: React-snap (lokalne prerenderowanie)
```bash
npm install --save-dev react-snap
```

Dodaj do `package.json`:
```json
{
  "scripts": {
    "postbuild": "react-snap"
  },
  "reactSnap": {
    "include": [
      "/",
      "/programy",
      "/wyniki",
      "/kontakt",
      "/konsultacja"
    ],
    "skipThirdPartyRequests": true,
    "minifyHtml": {
      "collapseWhitespace": false,
      "removeComments": false
    }
  }
}
```

### Opcja 3: Prerender.io (serwis zewnętrzny)
1. Zarejestruj się na https://prerender.io
2. Dodaj middleware do hostingu
3. Serwis automatycznie prerenderuje dla botów

## Weryfikacja
Po wdrożeniu prerender:

1. **Sprawdź View Source**:
```bash
curl https://earninglab.pl/ | grep "og:title"
```
Powinno zwrócić meta tag bez ładowania JavaScript.

2. **Facebook Debugger**:
https://developers.facebook.com/tools/debug/
Wklej URL i sprawdź czy widzi og:image i og:title.

3. **Google Rich Results Test**:
https://search.google.com/test/rich-results

## Uwagi
- React Helmet wstawia meta tagi dynamicznie podczas runtime
- Bez prerender boty widzą tylko bazowy index.html (bez meta tagów)
- Prerender "mrozi" HTML po załadowaniu React + Helmet
- Statyczne pliki (sitemap.xml, robots.txt, og.png) działają bez prerender
