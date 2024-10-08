import { useTranslation } from 'react-i18next';

const Articles = () => {
  const { t } = useTranslation();

const articles = [
  {
    id: 1,
    title: t('blog.procedure'),
    date: '2024-07-27',
    image: '/images/Jana-kosmetyki.png',
    content: 'Jak przygotować się do zabiegu',
  },
  {
    id: 2,
    title: t('blog.why_sugar_paste'),
    date: '2024-08-02',
    image: '/images/pasta-cukrowa.png',
    content: 'Dlaczego pasta cukrowa.',
  },
  {
    id: 3,
    title: t('blog.alexandria_products'),
    date: '2024-08-02',
    image: '/images/kosmetyki.png',
    content: 'Produkty Alexandria Professional',
  },
  {
    id: 4,
    title: t('blog.procedure'),
    date: '2024-08-02',
    image: '/images/depilacja.png',
    content: 'Jak wygląda zabieg',
  },
];
return articles;
};
export default Articles;
