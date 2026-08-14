# Czarniak · Podkówka — Sprint 1

Fundament nowej strony kancelarii notarialnej: header, hero, subtelne wejście strony, editorialna sekcja czynności i lokalne wyszukiwanie usług.

## Uruchomienie

```bash
npm install
npm run dev
```

Podstawowe sprawdzenia jakości:

```bash
npm run lint
npm run typecheck
npm run build
```

## Konfiguracja adresu

Opcjonalnie ustaw `NEXT_PUBLIC_SITE_URL`, aby podmienić placeholder `https://notariusz.example` używany przez canonical, Open Graph, robots i sitemap.

## Obrazy

Placeholdery oraz nazwy docelowych plików znajdują się w `public/images/`. Po otrzymaniu fotografii należy podmienić źródło w `HeroImagePlaceholder`, bez zmiany układu layoutu.

## GEO / llms.txt

`public/llms.txt` jest krótką wersją roboczą. Należy go aktualizować wraz z rozbudową witryny, dodawaniem podstron i zmianą struktury URL.

## Zakres Sprintu 2

Pozostawiono na później: docelowe fotografie, podstrony usług, pełną sekcję kancelarii i kontaktu, JSON-LD (`Notary` / `LegalService`, `Person`, `BreadcrumbList`), rozbudowaną strukturę URL oraz finalne treści dokumentów.
